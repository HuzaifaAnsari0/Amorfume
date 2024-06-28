const express = require('express');
require('dotenv').config(); // Ensure this is at the top to load environment variables first
const connectDB = require('./src/db.js'); // Adjust the path as necessary
const router = require('./src/user/router.js'); // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use router for all routes
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on the defined port, fallback to 3000 if not specified
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});