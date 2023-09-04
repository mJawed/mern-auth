const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [4, 'Password must be at least 4 characters'],
    maxlength: [300, 'Password cannot exceed 200 characters'],
  },
  terms: {
    type: Boolean,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 
