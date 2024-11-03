import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import NavLogo from '../../assets/images/amorfumeLogoBlack.png'
import AdminNav from './AdminNav';

function ProductForm() {

  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA

  const goToWebsite = () => {
    // Assuming you have a route for your main website
    navigate('/');
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
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
      const response = await axios.post(`${url}/insert-products`, product, {
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
    <>
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
            <button onClick={InsertProducts} className=" flex py-2 px-4 hover:bg-gray-700 text-white"> <BetweenHorizontalEnd className='text-white px-1' />Insert Products</button>
            <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white"><ScanEye className=' text-white px-1' /> View & Update Products</button>
          </div> */}
          <AdminNav />

          {/* Content Area */}
          <div className="flex-1 py-0  overflow-auto">

            <section className='max-w-4xl p-6 mx-auto bg-slate-100 rounded-md shadow-md dark:bg-gray-300 mt-20'>
              <h2 className="text-2xl font-bold text-center mb-4">Insert Products</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-500">{error}</p>}


                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                   required 
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                   />
                </div>

                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Price</label>
                <input
                 type="number" 
                 name="price" 
                 value={product.price} 
                 onChange={handleChange} 
                 required 
                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                 />
                </div>
                
                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Volume</label>

                <input
                 type="number" 
                 name="volume" 
                 value={product.volume} 
                 onChange={handleChange} 
                 required 
                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                 />
                 </div>

                 <div>
                 <label className="text-black texy-semibold dark:text-gray-200">Description</label>

                <textarea name="description" value={product.description} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
                </textarea>
                </div>

                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Image</label>

                <input 
                type="text" 
                name="image1" 
                value={product.image1} 
                onChange={handleChange} 
                placeholder="Image URL 1" required 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                </div>

                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Image</label>

                <input 
                type="text" 
                name="image2" 
                value={product.image2} 
                onChange={handleChange} 
                placeholder="Image URL 2" required 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                </div>

                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Image</label>

                <input 
                type="text" 
                name="image3" 
                value={product.image3} 
                onChange={handleChange} 
                placeholder="Image URL 3" required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
                </div>

                <div>
                <label className="text-black texy-semibold dark:text-gray-200">Select Category</label>

                <select 
                name="category" 
                value={product.category} 
                onChange={handleChange} required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                 
                  <option value="">Select Category</option>
                  <option value="adult">Adult</option>
                  <option value="kids">Kids</option>
                  <option value="teens">Teens</option>
                </select>
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-4">Submit</button>
                <button type="reset" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleBack}>Back</button>
             
             
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;