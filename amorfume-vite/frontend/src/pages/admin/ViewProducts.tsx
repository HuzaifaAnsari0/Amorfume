import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import NavLogo from '../../assets/images/amorfumeLogoBlack.png';

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
  const navigate = useNavigate();

  const InsertProducts = () => {
    navigate('/admin-dashboard/insert-products');
  };

  const ViewProducts = () => {
    navigate('/admin-dashboard/view-products');
  };

  const goToWebsite = () => {
    navigate('/');
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-slate-100 p-4">
        <div className="text-lg font-semibold w-40"><img src={NavLogo} alt="" /></div>
        <div className="text-xl font-semibold">Admin Dashboard</div>
        <button onClick={goToWebsite} className="bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Website
        </button>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-slate-600 text-black flex flex-col">
          <div className="flex p-5 font-bold text-lg">Operations</div>
          <button onClick={InsertProducts} className="py-2 px-4 hover:bg-gray-700">Insert Products</button>
          <button onClick={ViewProducts} className="py-2 px-4 hover:bg-gray-700">View & Update Products</button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-10 overflow-auto">
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
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
}

export default Products;