import { useState } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';

// React example
function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/forgot-password`, { email }, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setIsModalOpen(true);
        // alert('Please check your email to reset your password.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Enter your email"
    //     required
    //   />
    //   <button type="submit">Submit</button>
    // </form>
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl mb-4 font-semibold  text-gray-700 text-center">Forgot Password</h2>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
        >
          Submit
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Password Reset">
        <p>Please check your email to reset your password.</p>
      </Modal>
    </div>

  );
}

export default ForgetPassword;