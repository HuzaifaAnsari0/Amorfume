const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },

  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['adult', 'kids', 'teens']
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;