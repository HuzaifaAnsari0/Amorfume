const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  // googleId: {
  //   type: String,
  //   required: function() { return this.isGoogleSignUp; },
  //   sparse: true,
  // },
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
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;