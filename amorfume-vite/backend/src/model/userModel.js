const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
    sparse: true,
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
  password: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  role:{
    type: Number,
    required: true,
    default: 0,
    enum: [0, 1], // 0 = user, 1 = admin
  },
  phoneNumber: {
    type: String,
    required: false,
    trim: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;