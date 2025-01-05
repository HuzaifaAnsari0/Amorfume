import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import NavLogo from '../../assets/logo/amorfume_logoBlack.svg';
import AdminNav from './AdminNav';

interface Product {
  _id: string;
  name: string;
  bottleOptions: {
    type: string;
    price: number;
  }[];
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  category: 'adult' | 'kids' | 'teens';
}

function Products() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA


  const goToWebsite = () => {
    navigate('/');
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/view-products`)
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
    fetch(`${url}/delete-product/${productId}`, { method: 'DELETE' })
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
        <Link to="/admin-dashboard">
          <div className="text-lg font-semibold w-40">
            <img src={NavLogo} alt="" />
          </div>
        </Link>
        <div className="text-xl font-semibold">Admin Dashboard</div>
        <button onClick={goToWebsite} className="bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Website
        </button>
      </div>
  
      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* <div className="w-64 bg-slate-600 text-black flex flex-col">
          <div className="flex p-5 font-bold text-lg text-white">Operations</div>
          <button onClick={InsertProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white">
            <BetweenHorizontalEnd className='text-white px-1' />Insert Products
          </button>
          <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white">
            <ScanEye className='text-white px-1' /> View & Update Products
          </button>
        </div> */}
        <AdminNav />
  
        {/* Content Area */}
        <div className="flex-1 p-10 overflow-auto">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-4">Products</h2>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto">
                {products.map(product => (
                  <div key={product._id} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <img className="object-cover w-full h-60" src={product.image1} alt="product image" />
                    <div className="mt-4 px-5 pb-5">
                      <h5 className="text-lg py-1 tracking-tight text-slate-900"><span className='font-bold'>Name: </span>{product.name}</h5>
                      <p className="text-sm py-1 tracking-tight text-slate-900"><span className='font-bold'>Description: </span>{product.description}</p>
                      <p className="text-lg py-1 tracking-tight text-slate-900"><span className='font-bold'>Category: </span>{product.category}</p>
                      <div className="mt-2 mb-1 flex items-center justify-between">
                        <div>
                          <span className="text-lg text-slate-900">
                            <span className='font-bold'>Prices: </span>
                            {product.bottleOptions.map((option, index) => (
                              <div key={index} className="text-sm">
                                {option.type}: ${option.price}
                              </div>
                            ))}
                          </span>
                        </div>
                      </div>
                      <div className='flex justify-items-center'>
                        <button
                          onClick={() => handleUpdate(product._id)}
                          className="flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mx-5"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">No products found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;