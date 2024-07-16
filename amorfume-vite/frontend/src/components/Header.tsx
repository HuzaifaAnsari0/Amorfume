import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
 

    return (
        <div className='shadow-md w-full'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center
             bg-white'>
                <div className='flex text-2xl cursor pointer items-center gap-1'>
                    <BeakerIcon className='h-6 w-6 text-indigo-600' />
                   <span className='font-bold'>Amorfume</span>
                </div>
                {/* NavLink */}
                <ul className='flex pl-9 md:pl-0'>
                    
                        
                        <li className=' font-semibold my-7 md:my-0 md:ml-8'>
                           <Link to="/Store">Store</Link>
                        </li>
                        <li className=' font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to="/About">About</Link>
                        </li>
                        <li className=' font-semibold my-7 md:my-0 md:ml-8'>
                            <Link to="/signup">Signup</Link>
                            </li>
                        <li className=' font-semibold my-7 md:my-0 md:ml-8'>
                        <Link to="/Cart">Cart</Link>
                        </li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Header;