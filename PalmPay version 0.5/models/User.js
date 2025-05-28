import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z0-9._%+-]+@((gmail|yahoo|hotmail|outlook|icloud|protonmail|numl)\.(com|org|net|edu|co|io|gov)|numl\.edu\.pk)$/i
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  authProvider: {
    type: String,
    default: 'email'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    default: 'user'
  }
});

export const User = mongoose.model('User', userSchema);
