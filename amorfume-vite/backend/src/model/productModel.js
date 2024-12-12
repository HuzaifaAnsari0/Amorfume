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
  image4: {
    type: String,
    required: true
  },
  image5: {
    type: String,
    required: true
  },
  image6: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['adult', 'kids', 'teens']
  },
  features: {
    type: [String], // Array of feature strings
    required: true
  },
  fragranceNotes: {
    type: {
      olfactiveFamily: { type: String, required: true },
      top: { type: String, required: true },
      heart: { type: String, required: true },
      base: { type: String, required: true }
    },
    required: true
  },
  applicationTips: {
    type: [String], // Array of tips
    required: true
  },
  feelings: {
    type: [String], // Array of feelings
    required: true
  },
  legalInfo: {
    ingredients: { type: String, required: true },
    isolates: { type: [String], required: true } // Array of isolate strings
  },
  occasions: {
    type: [String], // Array of occasions
    required: true
  },
  shoppingAndReturn: {
    type: [String], // Array for shopping and return details
    required: true
  },
  behindThePerfume: {
    type: String, // Customizable details
    default: null
  },
  whyParentsLoveIt: {
    type: String,
  },
  certifiedSafe: {
    type: Boolean,
    default: true
  },
  aiTechFormulated: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Custom validator for images array
function arrayLimit(val) {
  return val.length >= 1; // At least 1 image is required
}

const Product = mongoose.model('Product', productSchema);

module.exports = Product;