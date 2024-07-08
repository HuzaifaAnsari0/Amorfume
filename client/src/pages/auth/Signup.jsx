import React, { useState } from 'react';
import './Login.css'; // Corrected the CSS import to match the component
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import GoogleLogo from "../../assets/images/google.webp";
// import Logo from '../../images/logo.png';

const Signup = () => {
  // Initialize formData state to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  // Handle form submission for signup
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      console.log('Signup successful:', response.data);
      // Redirect to login page or dashboard as needed
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  return (
    <div className="signup-card">
        {/* <img src={Logo} alt="Logo" /> */}
        <form onSubmit={handleSignup} className="signup-form">
            <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
            <p style={{ textAlign: 'center' }}>Enter details to create your account</p>
            <div className='initial'>
                <label htmlFor="name">Name</label>
                <input
                    placeholder='Enter your name'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='initial'>
                <label htmlFor="email">Email</label>
                <input
                    placeholder='Enter your email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='initial'>
                <label htmlFor="password">Password</label>
                <input
                    placeholder='Enter your password'
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='initial'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    placeholder='Confirm your password'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="login-links">
            <p style={{marginRight: '90px'}}>
                Already have an account? <a href="/login">Login</a>
            </p>
            <p>
               <a href="/forgot-password">Forgot Password?</a>
            </p>
        </div>
        <div className="login-options">
            <p>OR: </p>
           
            <div>
            <img className="google-login" onClick={handleGoogleSignup} src={GoogleLogo} alt="Google Logo" />
            </div>
        </div>
    </div>
  );
};

export default Signup;