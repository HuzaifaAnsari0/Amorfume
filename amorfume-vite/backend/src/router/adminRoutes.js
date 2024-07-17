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
module.exports = router;
