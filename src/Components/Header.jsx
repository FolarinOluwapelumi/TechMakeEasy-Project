import React, { useState } from 'react';
import Button from './Button';
import Logo from '../assets/favicon-32x32.png'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center bg-white shadow-black-md p-4 md:px-40 text-blue-700">
        <div className="flex items-center">
          <img src={Logo} alt="TechMakeEasy" className="w-10 h-10 object-cover" />
        </div>
        <nav className="hidden md:flex items-center space-x-6 font-bold">
          <a href="#home" className="hover:text-purple-500">
            Home
          </a>
          <a href="#blog" className="hover:text-purple-500">
            Blog
          </a>
          <div className='flex items-center hover:text-purple-500'>
          <a href="#follow-us" className="">
            Follow Us
          </a>
          <svg
              className="w-5 h-5 font-bold ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </nav>
        <div>
          <Button href="#contact" className="hidden sm:flex border-2 border-blue-700 border-l-0 border-r-0 border-t-0">
            Contact Us
          </Button>
        </div>
        {/* Hamburger menu button */}
        <button
          className="block md:hidden text-purple-800 font-bold sm:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>
      {/* Mobile menu with slide animation */}
      <div
        className={`fixed top-16 left-0 w-64 h-full bg-white md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col mt-6 space-y-10 p-6 font-bold text-purple-500">
          <a href="#home" className="hover:text-purple-500">
            Home
          </a>
          <a href="#blog" className="hover:text-purple-500">
            Blog
          </a>
          <div className='flex items-center hover:text-purple-500'>
          <a href="#follow-us" className="">
            Follow Us
          </a>
          <svg
              className="w-5 h-5 font-bold ml-0.5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <Button href="#contact" className="mt-6 w-fit border-2 border-white border-l-0 border-r-0 border-t-0">
            Contact Us
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;