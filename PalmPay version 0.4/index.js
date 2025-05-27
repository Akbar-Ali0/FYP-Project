import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import { User } from './models/User.js';
import connectDB from './src/dbcon.js';

const app = express();
app.use(cors());          // Allow cross-origin requests (adjust as needed)
app.use(express.json());  // Parse JSON bodies

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

    // Hash the password given and compare with stored passwordHash
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    console.log(password)
    console.log(user.passwordHash)
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Authentication successful, respond as needed (e.g., generate token)
    res.status(200).json({ message: 'Sign in successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error', err });
  }
});


startApp();
