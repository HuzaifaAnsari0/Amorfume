const express = require('express');
const Product = require('../model/productModel.js'); // Adjust the path as necessary
const router = express.Router();
const User = require('../model/userModel.js'); // Adjust the path as necessary
const OrderHistory = require('../model/orderHistory.js'); // Adjust the path as necessary

router.post('/insert-products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      res.status(400).json({ message: 'Error creating product', error: error.message });
    }
  });

  router.get('/view-products', async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products from the database
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

  router.get('/update-product/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching product', error: error.message });
    }
  });

  router.put('/update-product/:id', async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
      res.status(400).json({ message: 'Error updating product', error: error.message });
    }
  });
  
  router.delete('/delete-product/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting product', error: error.message });
    }
  });

  router.get('/admin-dashboard', async (req, res) => {
    try {
      const user = await User.find(); // Adjust the query as needed
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user details', error });
    }
  });

  router.get('/admin-dashboard/order-history', async (req, res) => {
    try {
      const orderHistory = await OrderHistory.find().populate('products.productId'); // Populate product details if needed
      res.json(orderHistory);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching order history', error });
    }
  });

module.exports = router;
