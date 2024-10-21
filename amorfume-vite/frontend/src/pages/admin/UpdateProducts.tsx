import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NavLogo from '../../assets/images/amorfumeLogoBlack.png';
import { BetweenHorizontalEnd, ScanEye } from 'lucide-react';
import AdminNav from './AdminNav';

function UpdateProduct() {
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

  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    volume: '',
    image1: '',
    image2: '',
    image3: '',
    category: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFields = Object.entries(product).reduce((acc, [key, value]) => {
      if (value !== '') {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);

    fetch(`http://localhost:5000/update-product/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFields),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product updated successfully:', data);
        navigate('/admin-dashboard/view-products');
      })
      .catch((error) => console.error('Error updating product:', error));
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center bg-slate-100 p-4">
        <Link to="/admin-dashboard"> 
                <div className="text-lg font-semibold w-40">
                    <img src={NavLogo} alt="" />
                </div>
                </Link>
          <div className="text-xl font-semibold">Admin Dashboard</div>
          <button
            onClick={goToWebsite}
            className="bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Website
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* <div className="w-64 bg-slate-600 text-black flex flex-col">
            <div className="flex p-5 font-bold text-lg text-white">Operations</div>
            <button onClick={InsertProducts} className=" flex py-2 px-4 hover:bg-gray-700 text-white"> <BetweenHorizontalEnd className='text-white px-1' />Insert Products</button>
            <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white"><ScanEye className=' text-white px-1' /> View & Update Products</button>
     
          </div> */}
          <AdminNav />

          <div className="flex-1 p-10 overflow-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 p-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-gray-700">
                    Volume:
                  </label>
                  <input
                    type="number"
                    id="volume"
                    name="volume"
                    value={product.volume}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
                    Image 1:
                  </label>
                  <input
                    type="text"
                    id="image1"
                    name="image1"
                    value={product.image1}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
                    Image 2:
                  </label>
                  <input
                    type="text"
                    id="image2"
                    name="image2"
                    value={product.image2}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="image3" className="block text-sm font-medium text-gray-700">
                    Image 3:
                  </label>
                  <input
                    type="text"
                    id="image3"
                    name="image3"
                    value={product.image3}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select a category</option>
                    <option value="adult">Adult</option>
                    <option value="kids">Kids</option>
                    <option value="teens">Teens</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;