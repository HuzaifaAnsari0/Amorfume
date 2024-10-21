import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = ({ user, setUser, setDetailsConfirmed, userId }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const updateUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/updateUser', {
        userId: userId,
        contact: user.contact,
        country: user.country,
        address: user.address,
        state: user.state,
        city: user.city,
        pincode: user.pincode
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('Failed to update user data');
      }

      const updatedUser = response.data;
      setUser(updatedUser);
      setDetailsConfirmed(true); // Enable the payment button
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-xl">Check User Details</h2>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          readOnly
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
          readOnly
        />
      </label>
      <label className="block mb-2">
        Contact:
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        Country:
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        Address:
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        State:
        <input
          type="text"
          name="state"
          value={user.state}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        City:
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <label className="block mb-2">
        Pincode:
        <input
          type="text"
          name="pincode"
          value={user.pincode}
          onChange={handleChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
      </label>
      <div className='flex justify-center'>
      <button
        className="inline-block px-4 py-2 mt-3 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={updateUserData}
      >
        Use These Details
      </button>
      </div>
    </div>
  );
};

export default UpdateUser;