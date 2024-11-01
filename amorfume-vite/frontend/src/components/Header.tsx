import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../assets/images/amorfumeLogoBlack.png';
import { ShoppingBag, User } from 'lucide-react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

interface DecodedToken {
  isAdmin: number;
  // Add other properties if needed
}
interface Result {
  _id: string;
  name: string;
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>([]); // Specify the type here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await performSearch(searchQuery);
  };

  const performSearch = async (query: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/search`, { params: { q: query } });
      setSearchResults(response.data);

      // If there is exactly one search result, navigate to the product page
      if (response.data.length === 1) {
        navigate(`/store/productview/${response.data[0]._id}`);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleResultClick = (id: string) => {
    navigate(`/store/productview/${id}`);
  };

  const checkUserLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      setIsAdmin(decoded.isAdmin === 1);
      return true;
    }
    return false;
  };

  useEffect(() => {
    // Check if the token is present in the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/"); // Remove token from URL
    }
    setIsLoggedIn(checkUserLoggedIn());
  }, []);

  useEffect(() => {
    setIsLoggedIn(checkUserLoggedIn());
  }, []);

  return (
    <div className='shadow-md w-full'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
        <div className='flex text-2xl cursor-pointer items-center gap-1'>
          <Link to="/">
            <img src={NavLogo} alt="Nav Logo" />
          </Link>
        </div>

        {/* NavLink */}
        <ul className='flex items-center pl-9 md:pl-0'>
          <li className='font-semibold my-7 md:my-0 md:ml-10'>
            <div className="relative mx-auto w-max">
              <form onSubmit={handleFormSubmit} className="relative">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="peer cursor-pointer relative z-10 h-10 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-fuchsia-300 focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-fuchsia-300 peer-focus:stroke-fuchsia-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
              {Array.isArray(searchResults) && searchResults.length > 0 && (
                <div className='absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1'>
                  {searchResults.map((result) => (
                    <div
                      key={result._id}
                      className='p-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => handleResultClick(result._id)}
                    >
                      <p>{result.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <Link to="/Store">Store</Link>
          </li>
          {!isLoggedIn && (
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <Link to="/cart"><ShoppingBag /></Link>
          </li>
          <li className='font-semibold my-7 md:my-0 md:ml-8'>
            <Link to="/user"><User /></Link>
          </li>
          {isAdmin && (
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
              <Link to="/admin-dashboard">Admin</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;