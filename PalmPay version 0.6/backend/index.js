import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { User } from './models/User.js';
import connectDB from './dbcon.js';

const app = express();
app.use(cors());          // Allow cross-origin requests (adjust as needed)
app.use(express.json());  // Parse JSON bodies

// JWT Secret - In production, use environment variable
// const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const JWT_SECRET = 'your-super-secret-jwt-key';
const JWT_EXPIRES_IN = '7d'; // Token expires in 7 days

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-passwordHash');
    
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Invalid token or user not active' });
    }
    
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token',err });
  }
};

const startApp = async () => {
  await connectDB();
  console.log('MongoDB connected');

  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });
};

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create and save user
    const user = new User({
      name,
      email,
      passwordHash,
      authProvider: 'email',
      isActive: true,
      role: 'user',
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(400).json({ error: 'Account is deactivated' });
    }

    // Hash the password given and compare with stored passwordHash
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Authentication successful, return token and user info
    res.status(200).json({ 
      message: 'Sign in successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// Protected route example - Get user profile
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    res.json({
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        createdAt: req.user.createdAt
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error',err });
  }
});

// Route to verify token validity
app.get('/api/verify-token', authenticateToken, (req, res) => {
  res.json({ 
    valid: true, 
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
});

// Logout route (optional - mainly for token blacklisting if implemented)
app.post('/api/logout', authenticateToken, (req, res) => {
  // In a more sophisticated setup, you'd add the token to a blacklist
  res.json({ message: 'Logged out successfully' });
});

startApp();