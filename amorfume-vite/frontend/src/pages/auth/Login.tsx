import {jwtDecode} from 'jwt-decode'; // You might need to install jwt-decode
import React, { useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Adjust the import path
// import { GoogleLogin } from 'react-google-login'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const { setIsAuthenticated } = useAuth();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        interface DecodedToken {
            isAdmin: boolean;
            // Include other properties from the token as needed
          }
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password});
            const token = response.data.token;
            localStorage.setItem('token', token); // Store the token
            console.log('Login successful:', response.data);
            // Decode token to get isAdmin
            const decoded: DecodedToken = jwtDecode(token);
            const isAdminValue = decoded.isAdmin;
            localStorage.setItem('isAdmin', isAdminValue.toString()); // Store isAdmin flag
            if (decoded.isAdmin) {
                // setIsAuthenticated(true);
                navigate('/admin-dashboard');
            } else {
                navigate('/');
            }
        } catch (error: any) {
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

    return (
        <div className="signup-card">
            <form onSubmit={handleLogin} className="signup-form">
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <p style={{ textAlign: 'center' }}>Enter details to create your account</p>
                <div className='initial'>
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder='Enter your email'
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="initial">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder='Enter your password'
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
                 <p style={{marginRight: '90px'}}>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
                <p>
                   <a href="/forgot-password">Forgot Password</a>
                </p>
            </div>
        </div>
    );
};

export default Login;