import React, { useState, useEffect } from 'react';
import './Login.css'; // Assuming the CSS is saved in Signup.css
// import Logo from '../../images/logo.png';
const Signup = () => {
    
    
    // useEffect(() => {
    //     document.body.style.backgroundColor = 'red';
    // }, []);
    
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the signup
    console.log(formData);
  };

return (
    <div className="signup-card">
        {/* <img src="{Logo}" /> */}
        <form onSubmit={handleSubmit} className="signup-form">
            <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
            <p style={{ textAlign: 'center' }}>Enter details to create your account</p>
            <div>
                <label htmlFor="username">Name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="password-">
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div className="login-options">
            <p>Or sign up with:</p>
            <button className="google-login">Login with Google</button>
        </div>
        <div className="login-links">
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
            <p>
                Forgot your password? <a href="/forgot-password">Reset Password</a>
            </p>
        </div>
    </div>
);
};

export default Signup;