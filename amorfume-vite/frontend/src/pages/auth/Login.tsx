import {jwtDecode} from 'jwt-decode'; // You might need to install jwt-decode
import React, { useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
  // Handle Google Signup
  const handleGoogleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Google Signup');
    window.open("http://localhost:5000/auth/google/login/callback", "_self");
  };

    return (<div className="py-4 md:py-8 dark:bg-gray-800 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 xl:px-20">
        <form onSubmit={handleLogin} className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:max-w-lg xl:p-8 dark:bg-gray-800 dark:border-gray-700 p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">Login</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center">Enter details to create your account</p>
            <form onClick={handleGoogleSignup} method="post" action="">
              <button className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="submit">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_13183_10121)">
                    <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path>
                    <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path>
                    <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path>
                    <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </form>
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