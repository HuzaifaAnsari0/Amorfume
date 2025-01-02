import axios from 'axios';

const UpdateUser = ({ user, setUser, setDetailsConfirmed, userId }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value
    }));
  };
  const url = import.meta.env.VITE_BACKEND_URL;

  const updateUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/updateUser`, {
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
      setDetailsConfirmed(true);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter contact number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={user.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter country"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="state"
              value={user.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter state"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter city"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={user.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter pincode"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={updateUserData}
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Confirm Details
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;