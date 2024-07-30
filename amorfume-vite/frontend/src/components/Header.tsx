import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/images/amorfumeLogoBlack.png'
import { ChevronDown, ShoppingBag, User } from 'lucide-react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to check if the user is logged in
    const checkUserLoggedIn = () => {
      const token = localStorage.getItem("token");
      return !!token;
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
        // console.log("Effect running");
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
              


              <form action="" className="relative mx-auto w-max">
                <input type="search" 
                      className="peer cursor-pointer relative z-10 h-10 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-fuchsia-300 focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-fuchsia-300 peer-focus:stroke-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
              
              
                          </li>
            
            <li className='font-semibold my-7 md:my-0 md:ml-8'>
              <Link to="/Store">Store</Link>
            </li>
            <li className='font-semibold my-7 md:my-0 md:ml-8 relative'>
              <button onClick={toggleDropdown} className='flex items-center'>
                Products
                <ChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">


                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      to="/kids"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Kids
                    </Link>
                    <Link
                      to="/teens"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                     Teens
                    </Link>
                    <Link
                      to="/adults"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Adults
                    </Link>
                  </div>
                </div>
              )}
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
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header