import mongoose from 'mongoose';
import { User } from '../models/User.js';  // adjust path if needed

const connectDB = async () => {
  try {
    //facing issues so using ipv4. (ip address)
    await mongoose.connect('mongodb://127.0.0.1:27017/palmpay');
    console.log('MongoDB connected');

    // Check if any users exist
    const userCount = await User.estimatedDocumentCount();

    if (userCount === 0) {
      console.log('No users found — adding dummy users');

      await User.insertMany([
        {
          name: 'John Doe',
          email: 'johndoe@outlook.com',
          passwordHash: '$2a$10$zZE1/vrWsbFjaJbHcC0Jb.R6enojUQAFN5PjHQeH.VOt6Y4A8wcR2',
          authProvider: 'email',
          isActive: true,
          role: 'user'
        },
        {
          name: 'Admin User',
          email: 'adminuser@gmail.com',
          passwordHash: '$2a$10$sQNpJ8p3Rs9V0DNLhcusQuO6sQaReAAGE5lFIn21/0lCi1uXG43bq',
          authProvider: 'email',
          isActive: true,
          role: 'admin'
        }
      ]);

      console.log('Dummy users inserted');
    } else {
      console.log('Users already exist — skipping dummy data insertion');
    }
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export default connectDB;
