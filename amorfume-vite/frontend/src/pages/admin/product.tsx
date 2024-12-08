import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/images/amorfumeLogoBlack.png';
import AdminNav from './AdminNav';

function ProductForm() {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;

  const goToWebsite = () => {
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
    image4: '',
    image5: '',
    image6: '',
    category: '',
    features: [],
    fragranceNotes: {
      olfactiveFamily: '',
      top: '',
      heart: '',
      base: ''
    },
    applicationTips: [],
    feelings: [],
    legalInfo: {
      ingredients: '',
      isolates: []
    },
    occasions: [],
    shoppingAndReturn: [],
    personalization: '',
    certifiedSafe: true,
    aiTechFormulated: true
  });

  const [error, setError] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    if (name.startsWith('fragranceNotes')) {
      const noteKey = name.split('.')[1];
      setProduct((prevState) => ({
        ...prevState,
        fragranceNotes: {
          ...prevState.fragranceNotes,
          [noteKey]: value
        }
      }));
    } else if (name.startsWith('legalInfo.isolates')) {
      setProduct((prevState) => ({
        ...prevState,
        legalInfo: {
          ...prevState.legalInfo,
          isolates: value.split(',')
        }
      }));
    } else if (name === 'features' || name === 'applicationTips' || name === 'feelings' || name === 'occasions' || name === 'shoppingAndReturn') {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value.split(',')
      }));
    } else {
      setProduct((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const { name, price, volume, description, image1, category } = product;
    if (!name || !price || !volume || !description || !image1 || !category) {
      setError('Please fill in all required fields.');
      return false;
    }
    return true;
  };

  const handleBack = () => {
    navigate('/admin-dashboard/view-products');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const payload = {
        ...product,
        images: [product.image1, product.image2, product.image3, product.image4, product.image5, product.image6].filter(Boolean), // Filter empty image fields
      };

      const response = await axios.post(`${url}/insert-products`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Product saved:', response.data);
      alert('Product saved successfully.');
      navigate('/admin-dashboard/view-products');
    } catch (err) {
      console.error('Error submitting form:', err);
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
              <img src={NavLogo} alt="Nav Logo" />
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

        {/* Main Content with Sidebar */}
        <div className="flex flex-1 overflow-hidden">
          <AdminNav />
          <div className="flex-1 py-0 overflow-auto">
            <section className="max-w-4xl p-6 mx-auto bg-slate-100 rounded-md shadow-md mt-20">
              <h2 className="text-2xl font-bold text-center mb-4">Insert Products</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-500">{error}</p>}

                <div>
                  <label className="text-black text-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Volume</label>
                  <input
                    type="number"
                    name="volume"
                    value={product.volume}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Description</label>
                  <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {[...Array(6)].map((_, index) => (
                  <div key={index}>
                    <label className="text-black text-semibold">Image {index + 1}</label>
                    <input
                      type="text"
                      name={`image${index + 1}`}
                      value={product[`image${index + 1}`]}
                      onChange={handleChange}
                      placeholder={`Image URL ${index + 1}`}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-black text-semibold">Select Category</label>
                  <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  >
                    <option value="">Select Category</option>
                    <option value="adult">Adult</option>
                    <option value="kids">Kids</option>
                    <option value="teens">Teens</option>
                  </select>
                </div>

                <div>
                  <label className="text-black text-semibold">Features (comma-separated)</label>
                  <input
                    type="text"
                    name="features"
                    value={product.features.join(', ')}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Olfactive Family</label>
                  <input
                    type="text"
                    name="fragranceNotes.olfactiveFamily"
                    value={product.fragranceNotes.olfactiveFamily}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Top Notes</label>
                  <input
                    type="text"
                    name="fragranceNotes.top"
                    value={product.fragranceNotes.top}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Heart Notes</label>
                  <input
                    type="text"
                    name="fragranceNotes.heart"
                    value={product.fragranceNotes.heart}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Base Notes</label>
                  <input
                    type="text"
                    name="fragranceNotes.base"
                    value={product.fragranceNotes.base}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Application Tips (comma-separated)</label>
                  <input
                    type="text"
                    name="applicationTips"
                    value={product.applicationTips.join(', ')}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Feelings (comma-separated)</label>
                  <input
                    type="text"
                    name="feelings"
                    value={product.feelings.join(', ')}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Legal Info - Ingredients</label>
                  <input
                    type="text"
                    name="legalInfo.ingredients"
                    value={product.legalInfo.ingredients}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Legal Info - Isolates (comma-separated)</label>
                  <input
                    type="text"
                    name="legalInfo.isolates"
                    value={product.legalInfo.isolates.join(', ')}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Occasions (comma-separated)</label>
                  <input
                    type="text"
                    name="occasions"
                    value={product.occasions.join(', ')}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Personalization</label>
                  <input
                    type="text"
                    name="personalization"
                    value={product.personalization}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-black text-semibold">Certified Safe</label>
                  <input
                    type="checkbox"
                    name="certifiedSafe"
                    checked={product.certifiedSafe}
                    onChange={() => setProduct((prevState) => ({ ...prevState, certifiedSafe: !prevState.certifiedSafe }))}
                    className="mr-2"
                  />
                  Yes
                </div>

                <div>
                  <label className="text-black text-semibold">AI Tech Formulated</label>
                  <input
                    type="checkbox"
                    name="aiTechFormulated"
                    checked={product.aiTechFormulated}
                    onChange={() => setProduct((prevState) => ({ ...prevState, aiTechFormulated: !prevState.aiTechFormulated }))}
                    className="mr-2"
                  />
                  Yes
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;

