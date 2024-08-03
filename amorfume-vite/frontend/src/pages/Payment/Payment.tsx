import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/bottleBlack.png';
import axios from 'axios';

const Payment = () => {

  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    contact: '',
    address: '',
    pincode: ''
  });

  const [detailsConfirmed, setDetailsConfirmed] = useState(false);

  const fetchUserData = async () => {
    const response = await fetch('http://localhost:5000/user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const userData = await response.json();
    return userData;
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData();
      setUser(userData);
    };
    getUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const updateUserData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/updateUser', {
        contact: user.contact,
        address: user.address,
        pincode: user.pincode
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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

  const paymentHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const amount = 500;
    const currency = 'INR';
    const receiptId = 'receipt#1';

    try {
      // Fetch user data
      const user = await fetchUserData();

      const response = await fetch('http://localhost:5000/order', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId
        })
      });

      const order = await response.json();
      console.log('order', order);

      const options = {
        key: "rzp_test_qE4CFpkQIJgBAY", // Add your Razorpay key here
        amount,
        currency,
        name: "Amorfume",
        description: "some description",
        image: logo,
        order_id: order.id,
        handler: async function(response: any) {
          const body = { ...response };

          const validateResponse = await fetch('http://localhost:5000/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });

          const jsonResponse = await validateResponse.json();
          console.log('jsonResponse', jsonResponse);
        },
        prefill: {
          name: user.name, // Use fetched user data here
          email: user.email, // Use fetched user data here
          contact: 'come contact', // Use fetched user data here
        },
        notes: {
          address: "some address", // Use fetched user data here
        },
        theme: {
          color: "#3399cc",
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function(response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error('Error in paymentHandler:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100">
      <h1 className="text-center mb-5 text-2xl font-bold">Razor Pay</h1>
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
          Pincode:
          <input
            type="text"
            name="pincode"
            value={user.pincode}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
          />
        </label>
      </div>
      <button
        className="inline-block px-4 py-2 mt-5 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={updateUserData}
      >
        Use These Details
      </button>
      <button
        className={`inline-block px-4 py-2 mt-5 bg-blue-500 text-white rounded hover:bg-blue-600 ${!detailsConfirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={paymentHandler}
        disabled={!detailsConfirmed}
      >
        Pay now
      </button>
    </div>
  );
};

export default Payment;