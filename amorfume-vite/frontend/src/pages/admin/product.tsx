import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

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
  const Navigate = useNavigate();
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.currentTarget;
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

  const handleBack = () => {
    Navigate('/admin-dashboard/view-products');
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      Navigate('/admin-dashboard/view-products');
      // Optionally reset form here
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className='p-20'> 
    <h2 className="text-2xl font-bold text-center mb-4">Insert Products</h2>
<form onSubmit={handleSubmit} className="space-y-4">
  {error && <p className="text-red-500">{error}</p>}
  <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border border-gray-300 rounded-md" />
  <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 border border-gray-300 rounded-md" />
  <input type="number" name="volume" value={product.volume} onChange={handleChange} placeholder="Volume" required className="w-full p-2 border border-gray-300 rounded-md" />
  <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required className="w-full p-2 border border-gray-300 rounded-md"></textarea>
  <input type="text" name="image1" value={product.image1} onChange={handleChange} placeholder="Image URL 1" required className="w-full p-2 border border-gray-300 rounded-md" />
  <input type="text" name="image2" value={product.image2} onChange={handleChange} placeholder="Image URL 2" required className="w-full p-2 border border-gray-300 rounded-md" />
  <input type="text" name="image3" value={product.image3} onChange={handleChange} placeholder="Image URL 3" required className="w-full p-2 border border-gray-300 rounded-md" />
  <select name="category" value={product.category} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
    <option value="">Select Category</option>
    <option value="adult">Adult</option>
    <option value="kids">Kids</option>
    <option value="teens">Teens</option>
  </select>
  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">Submit</button>
<button type="reset" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleBack}>Back</button>
</form>
</div>
  );
}

export default ProductForm;