import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/images/amorfumeLogoBlack.png'
import { ChevronDown, ShoppingBag, User } from 'lucide-react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Mock function to simulate checking user authentication status
    const checkUserLoggedIn = () => {
        const token = localStorage.getItem("token");
        // console.log("Checking if user is logged in:", token);
        return token ? true : false;
    };
    
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
          <ul className='flex pl-9 md:pl-0'>
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
              <Link to="/profile"><User /></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header