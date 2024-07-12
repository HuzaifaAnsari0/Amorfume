const express = require('express');
const { register,login,editUser } = require('../user/auth.js'); // Adjust the path as necessary
const { OAuth2Client } = require('google-auth-library');

const router = express.Router();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

router.post('/google-login', async (req, res) => {
  const { token } = req.body;
  try {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      // Your user handling logic here

      res.status(200).json({ message: 'Login successful', user: payload });
  } catch (error) {
      console.error('Error verifying Google token:', error);
      res.status(401).json({ message: 'Unauthorized' });
  }
});

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