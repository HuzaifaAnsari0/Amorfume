const express = require('express');
const { register, login, editUser } = require('../user/auth.js'); // Adjust the path as necessary
const Contact = require('../model/contactModel.js'); // Adjust the path as per your directory structure
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const User = require('../model/userModel.js'); // Adjust based on your user model
const { sendEmail } = require('../user/auth.js'); // Implement this function based on your email sending method
const jwt = require('jsonwebtoken');
const Product = require('../model/productModel.js'); // Adjust the path as necessary
const OrderHistory = require('../model/orderHistory.js'); // Assuming you have the orderHistory model

const router = express.Router();

//----------------------------------------------
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const result = await register(name, email, password);
  res.status(result.status).json({ message: result.message, token: result.token });
});

//----------------------------------------------
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  res.status(result.status).json({ message: result.message, token: result.token });
});

//----------------------------------------------
router.put('/edit/:userId', async (req, res) => {
  const { userId } = req.params;
  const updates = req.body; // Contains the fields to update
  const result = await editUser(userId, updates);
  res.status(result.status).json({ message: result.message });
});

//----------------------------------------------
router.post('/contactus', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).send('Contact saved');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Error saving contact');
  }
});

//----------------------------------------------
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send('User not found');
  }

  const resetToken = crypto.randomBytes(20).toString('hex');
  const hash = await bcrypt.hash(resetToken, 10);
  user.resetPasswordToken = hash;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  await user.save();

  const resetUrl = `http://localhost:3000/reset-password/${user._id}/${resetToken}`;
  await sendEmail(user.email, 'Password Reset', `Please reset your password by clicking: ${resetUrl}`);

  res.send('Password reset email sent.');
});

//----------------------------------------------
router.post('/reset-password/:id/:token', async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Hash new password
    const hash = await bcrypt.hash(password, 10);

    // Update user password
    user.password = hash;
    user.resetPasswordToken = undefined; // Clear the reset token
    user.resetPasswordExpires = undefined; // Clear the token expiry
    await user.save();

    // Respond with success
    res.send({ Status: "Success" });
  } catch (err) {
    console.error(err); // Log the error for server-side debugging
    res.status(500).json({ Status: "An error occurred on the server" });
  }
});

//----------------------------------------------
router.get('/store/view-product/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const product = await Product.findById(id);
      if (product) {
          res.json(product);
      } else {
          res.status(404).json({ message: 'Product not found' });
      }
  } catch (err) {
      res.status(500).json({ message: 'Server error' });
  }
});

//----------------------------------------------
router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).send({ error: 'Query parameter "q" is required' });
  }

  console.log('Search query:', query); // Log the query

  try {
    const results = await Product.find({ name: new RegExp(query, 'i') });
    console.log('Search results:', results); // Log the results
    res.send(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

//----------------------------------------------
router.get('/user', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get the user ID from the decoded token
    const userId = decoded.userId;

    // Fetch user data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Send user data as response
    res.send(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

//----------------------------------------------
// Middleware to authenticate the user
const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    const tokenPart = token.split(' ')[1];
    jwt.verify(tokenPart, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send('Unauthorized');
      } else {
        req.userId = decoded._id; // Assuming the user ID is stored in the token as 'id'
        next();
      }
    });
  } else {
    res.status(401).send('Unauthorized');
  }
};

router.post('/updateUser', authenticate, async (req, res) => {
  const { contact, address, pincode } = req.body;
  const userId = req.body.userId; // Extracted from the token

  try {
    const user = await User.findById(userId);
    if (user) {
      user.contact = contact;
      user.address = address;
      user.pincode = pincode;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

//----------------------------------------------
router.post('/order-history', async (req, res) => {
  const { userId, name, email, contact, address, pincode, orderId, amount, currency, status, products } = req.body;

  try {
    const orderHistory = new OrderHistory({
      userId,
      name,
      email,
      contact,
      address,
      pincode,
      orderId,
      amount,
      currency,
      status,
      products
    });

    await orderHistory.save();
    res.json({ message: 'Order added to history successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;