import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../assets/logo/amorfume_logoBlack.svg';
import { ShoppingBag, User } from 'lucide-react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA
// console.log(url);
interface DecodedToken {
  isAdmin: number;
  // Add other properties if needed
}
// interface Result {
//   _id: string;
//   name: string;
// }

interface SearchResult {
  _id: string;
  name: string;
  description: string;
  image1: string;
  score: number;
  category: string;
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setShowResults(true);
      setIsSearching(true);
      try {
        const response = await axios.get(`${url}/search`, {
          params: { query }
        });
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const handleResultClick = (id: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/store/productview/${id}`);
    setSearchQuery('');
    setShowResults(false);
    setMobileMenuOpen(false);
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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/");
    }
    setIsLoggedIn(checkUserLoggedIn());
  }, []);

  useEffect(() => {
    setIsLoggedIn(checkUserLoggedIn());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]._id, e as unknown as React.MouseEvent);
    }
  };

  return (
    <div className="shadow-md w-full">
      <div className="md:px-10 py-4 px-3 bg-white flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer pr-2">
          <Link to="/">
            <img src={NavLogo} alt="Nav Logo" className="w-36 md:w-48" />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Search Input */}
          <div className="relative mx-auto w-full max-w-xs" ref={searchRef}>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowResults(true)}
                className="z-10 h-10 w-full rounded-full border bg-transparent pl-12 pr-3 outline-none border-fuchsia-300"
                placeholder="Search products..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5"
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
            {showResults && (searchQuery || isSearching) && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg max-h-96 overflow-y-auto">
                {isSearching ? (
                  <div className="p-3 text-center text-gray-500">Searching...</div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <div
                      key={result._id}
                      className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={(e) => handleResultClick(result._id, e)}
                    >
                      <img 
                        src={result.image1} 
                        alt={result.name} 
                        className="w-12 h-12 object-cover rounded mr-3"
                      />
                      <div>
                        <div className="font-semibold">{result.name}</div>
                        <div className="text-sm text-gray-600">{result.category}</div>
                      </div>
                    </div>
                  ))
                ) : searchQuery ? (
                  <div className="p-3 text-center text-gray-500">No results found</div>
                ) : null}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 pl-9">
            <li className="font-semibold">
              <Link to="/Store">Store</Link>
            </li>
            {!isLoggedIn && (
              <li className="font-semibold">
                <Link to="/signup">Signup</Link>
              </li>
            )}
            <li className="font-semibold">
              <Link to="/cart"><ShoppingBag /></Link>
            </li>
            <li className="font-semibold">
              <Link to={isLoggedIn ? "/user" : "/login"}><User /></Link>
            </li>
            {isAdmin && (
              <li className="font-semibold">
                <Link to="/admin-dashboard">Admin</Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden ml-3 focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-start space-y-4 px-7 pb-4 bg-white border-t border-gray-200">
          <li className="font-semibold">
            <Link to="/Store" onClick={() => setMobileMenuOpen(false)}>
              Store
            </Link>
          </li>
          {!isLoggedIn && (
            <li className="font-semibold">
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                Signup
              </Link>
            </li>
          )}
          <li className="font-semibold">
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingBag />
            </Link>
          </li>
          <li className="font-semibold">
            <Link to={isLoggedIn ? "/user" : "/login"} onClick={() => setMobileMenuOpen(false)}>
              <User />
            </Link>
          </li>
          {isAdmin && (
            <li className="font-semibold">
              <Link to="/admin-dashboard" onClick={() => setMobileMenuOpen(false)}>
                Admin
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;