const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure environment variables are loaded

const app = express();
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully.');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit process with failure
    }
  };

module.exports = connectDB;