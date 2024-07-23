import React, { useState } from 'react';
import axios from 'axios';

// React example
function ForgetPassword() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/forgot-password', { email }, {
            headers: { 'Content-Type': 'application/json' },
          });
          if(response.status === 200) {
          alert('Please check your email to reset your password.');
          }
        } catch (error) {
          alert('An error occurred. Please try again.');
        }
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

export default ForgetPassword;