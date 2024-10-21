import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
// import jwt from 'jsonwebtoken';

const PersonalInfoForm = () => {
    // const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    country: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  
  const [originalData, setOriginalData] = useState({}); // To store the original data for cancellation
  const [isEditable, setIsEditable] = useState(false);  // Controls edit mode
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // State for popup message

  const token = localStorage.getItem('token'); // Fetch userId from local storage
  const decoded = jwtDecode(token);
  // console.log(decoded);
  const userId = decoded.userId; // Fetch userId from local storage

  // Fetch the user data from the database on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const userData = await response.json();

        // Update the form data and store the original data
        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          country: userData.country || '',
          address: userData.address || '',
          city: userData.city || '',
          state: userData.state || '',
          pincode: userData.pincode || '',
        });

        setOriginalData(userData); // Store original data for cancel use
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle between edit and cancel
  const handleEditClick = () => {
    if (isEditable) {
      // If cancel is clicked, revert to original data
      setFormData(originalData);
    }
    setIsEditable(!isEditable); // Toggle edit mode
  };

  // Handle form submission (save data)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Fetch token from local storage
      const response = await axios.post('http://localhost:5000/updateUserProfile', {
        userId: userId, // Ensure this userId is correctly handled
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        country: formData.country,
        address: formData.address,
        state: formData.state,
        city: formData.city,
        pincode: formData.pincode,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send the token for authentication
        }
      });
  
      if (response.status !== 200) {
        throw new Error('Failed to update user data');
      }
  
      const updatedUser = response.data;
      setOriginalData(updatedUser); // Update original data after successful save
      setIsEditable(false); // Disable edit mode
      setPopupMessage('Information updated successfully');
      setTimeout(() => {
        setPopupMessage(null);
      }, 5000);
      // alert('Information updated successfully');
    } catch (error) {
      console.error('Error updating user information:', error);
      alert('Failed to update information');
    }
  };
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="pb-12">
        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-lg font-medium text-gray-900">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="given-name"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`} // Gray out when disabled
            />
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-900">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className="block text-lg font-medium text-gray-900">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              autoComplete="country-name"
              disabled={!isEditable} // Disable select when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 py-1.5 p-2 text-gray-900 ring-1 focus:ring-2 focus:ring-indigo-600 sm:max-w-xs sm:text-sm ${!isEditable ? 'bg-gray-100' : ''}`}
            >
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="col-span-full">
            <label htmlFor="address" className="block text-lg font-medium text-gray-900">Street address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              autoComplete="street-address"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="city" className="block text-lg font-medium text-gray-900">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              autoComplete="address-level2"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="state" className="block text-lg font-medium text-gray-900">State / Province</label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              autoComplete="address-level1"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="pincode" className="block text-lg font-medium text-gray-900">ZIP / Postal code</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              value={formData.pincode}
              onChange={handleChange}
              autoComplete="postal-code"
              disabled={!isEditable} // Disable input when not in edit mode
              className={`mt-2 w-full rounded-sm border-0 pt-1.5 pb-1 pl-3 text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-lg ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>
          
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={handleEditClick}
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              {isEditable ? 'Cancel' : 'Edit'}
            </button>
            <button
              type="submit"
              disabled={!isEditable} // Disable the save button unless in edit mode
              className={`rounded-sm bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!isEditable ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
    {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
