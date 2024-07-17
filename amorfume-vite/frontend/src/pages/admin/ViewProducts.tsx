import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

interface Product {
  _id: string;
  name: string;
  price: number;
  volume: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  category: 'adult' | 'kids' | 'teens';
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    fetch('http://localhost:5000/view-products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleUpdate = (productId: string) => {
    // Navigate to the update product page, passing the product ID
    navigate(`/update-product/${productId}`);
  };

  const handleDelete = (productId: string) => {
    fetch(`http://localhost:5000/delete-product/${productId}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setProducts(products.filter(product => product._id !== productId));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Products</h2>
      {products.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <li key={product._id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{product.name} - ${product.price}</h3>
              <p>Volume: {product.volume}ml</p>
              <p>Description: {product.description}</p>
              <p>Category: {product.category}</p>
              <div className="flex space-x-2 mt-2">
                <img src={product.image1} alt={`${product.name} image 1`} className="w-24 h-24 object-cover rounded" />
                <img src={product.image2} alt={`${product.name} image 2`} className="w-24 h-24 object-cover rounded" />
                <img src={product.image3} alt={`${product.name} image 3`} className="w-24 h-24 object-cover rounded" />
              </div>
              <button
                onClick={() => handleUpdate(product._id)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Update
              </button>
              <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 mx-4"
                >
                  Delete
                </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center">No products found.</div>
      )}
    </div>
  );
}

export default Products;