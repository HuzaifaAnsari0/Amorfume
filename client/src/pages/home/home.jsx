import React from 'react';
import Navbar from '../../components/Header/Navbar';

export default function home() {
  return (
    <div className="App">
      <Navbar />
      <div className='bg-slate-200 w-full h-screen flex justify-center items-center flex-col'>
        <span className="text-xl mb-4">Hello, Tailwind!</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Test Button
        </button>
      </div>
    </div>
  );
}