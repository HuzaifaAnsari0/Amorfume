import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    volume: '',
    description: '',
    image1: '',
    image2: '',
    image3: '',
    category: '' // Add category to the state
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, price, volume, description, image1, image2, image3, category } = product; // Include category in validation
    if (!name || !price || !volume || !description || !image1 || !image2 || !image3 || !category) {
      setError('Please fill in all fields.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/insert-products', product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Product saved:', response.data);
      alert("Product saved successfully.");
      // Optionally reset form here
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="volume" value={product.volume} onChange={handleChange} placeholder="Volume" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="image1" value={product.image1} onChange={handleChange} placeholder="Image URL 1" required />
      <input type="text" name="image2" value={product.image2} onChange={handleChange} placeholder="Image URL 2" required />
      <input type="text" name="image3" value={product.image3} onChange={handleChange} placeholder="Image URL 3" required />
      {/* Add a select input for category */}
      <select name="category" value={product.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="adult">Adult</option>
        <option value="kids">Kids</option>
        <option value="teens">Teens</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;