const express = require('express');
const { register,login,editUser } = require('./auth.js'); // Adjust the path as necessary

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const result = await register(name, email, password);
  res.status(result.status).json({ message: result.message, token: result.token });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  res.status(result.status).json({ message: result.message, token: result.token });
});

router.put('/edit/:userId', async (req, res) => {
  const { userId } = req.params;
  const updates = req.body; // Contains the fields to update
  const result = await editUser(userId, updates);
  res.status(result.status).json({ message: result.message });
});

module.exports = router;