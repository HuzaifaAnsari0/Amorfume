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

    return (<div className="py-4 md:py-8 dark:bg-gray-800 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 xl:px-20">
        <form onSubmit={handleLogin} className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:max-w-lg xl:p-8 dark:bg-gray-800 dark:border-gray-700 p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">Login</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center">Enter details to create your account</p>
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input
                        placeholder='Enter your email'
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input
                        placeholder='Enter your password'
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Login</button>
            </div>
            <div className="mt-4 flex justify-between items-center">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Don't have an account? <a href="/signup" className="text-teal-600 hover:underline dark:text-teal-500">Sign Up</a>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                <a href="/forgot-password" className="text-teal-600 hover:underline dark:text-teal-500">Forgot Password</a>
            </div>
        </div>
        </form>

    </div>
    );
};

export default Login;