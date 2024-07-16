const express = require('express');
const Product = require('../model/productModel.js'); // Adjust the path as necessary
const router = express.Router();

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

module.exports = router;
