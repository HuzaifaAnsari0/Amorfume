const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false, // Set to false because it might not be present for non-Google users
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: false, // Set to false because it might not be present for all users
  },
  password: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;