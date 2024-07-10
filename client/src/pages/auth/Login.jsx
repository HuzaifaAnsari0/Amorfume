import {jwtDecode} from 'jwt-decode'; // You might need to install jwt-decode
import React, { useState} from 'react';
import './Login.css'; // Assuming the CSS is saved in Signup.css
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password});
            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token
            
            // Decode token to get isAdmin
            const decoded = jwtDecode(token);
            if (decoded.isAdmin) {
                navigate('/admin-dashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                alert('Login failed: ' + error.response.data.message); // Assuming the error response contains a message
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
                alert('Login failed: ' + error.message);
            }
        }
    };

    // const handleGoogleLoginSuccess = async (response) => {
    //     console.log('Google login success:', response);
    //     const token = response.tokenId;
    //     try {
    //         const res = await fetch('http://localhost:5000/google-login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ token }),
    //         });
    //         const data = await res.json();
    //         console.log('Login success:', data);
    //     } catch (error) {
    //         console.error('Error sending token to backend:', error);
    //     }
    // };

    // const handleGoogleLoginFailure = (error) => {
    //     console.error('Google login failed:', error);
    // };


    return (
        <div className="signup-card">
            <form onSubmit={handleLogin} className="signup-form">
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <p style={{ textAlign: 'center' }}>Enter details to create your account</p>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="password-">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="login-options">
                {/* <p>Or sign up with:</p>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // Use REACT_APP_ prefix for environment variables in client-side code
                    buttonText="Login with Google"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    cookiePolicy={'single_host_origin'}
                /> */}
            </div>
            <div className="login-links">
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
                <p>
                    Forgot your password? <a href="/forgot-password">Reset Password</a>
                </p>
            </div>
        </div>
    );
};

export default Login;