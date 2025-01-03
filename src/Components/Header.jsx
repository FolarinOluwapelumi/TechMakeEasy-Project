import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import Button from './Button';
import Logo from '../assets/favicon-32x32.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const instagramLink = "https://www.instagram.com/tech_makeslifeeasy";

  // Handle clicking outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center bg-white shadow-black-md p-4 md:px-40 text-purple-600">
        <div className="flex items-center">
          <img src={Logo} alt="TechMakeEasy" className="w-10 h-10 object-cover" />
        </div>

        <nav className="hidden md:flex items-center space-x-6 font-bold">
          <Link to="/" className="hover:text-purple-500">
            Home
          </Link>
          <Link to="/blog" className="hover:text-purple-500">
            Blog
          </Link>
          <Link to="/about-us" className="hover:text-purple-500">
            About Us
          </Link>
          
          {/* Follow Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-purple-500 focus:outline-none"
            >
              Follow Us
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
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  <FaInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </div>
            )}
          </div>
        </nav>

        <div>
          <Button mailto="Techmakeeeasy0@gmail.com" className="hidden sm:flex border-2 border-blue-700 border-l-0 border-r-0 border-t-0">
            Contact Us
          </Button>
        </div>

        <button
          ref={buttonRef}
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

      {/* Mobile menu with overlay and slide animation */}
      {isMenuOpen && (
        <>
          {/* Dark overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Side menu */}
          <div
            ref={menuRef}
            className={`fixed top-16 left-0 w-64 h-full bg-white md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <nav className="flex flex-col mt-6 space-y-10 p-6 font-bold text-purple-500">
              <Link to="/" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/blog" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/about-us" className="hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              
              {/* Mobile Follow Us dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center hover:text-purple-500 focus:outline-none"
                >
                  Follow Us
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
                </button>
                
                {isDropdownOpen && (
                  <div className="mt-2 ml-4">
                    <a
                      href={instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 hover:text-purple-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaInstagram className="w-5 h-5 mr-2" />
                      Instagram
                    </a>
                  </div>
                )}
              </div>

              <Button 
                mailto="Techmakeeeasy0@gmail.com" 
                className="mt-6 w-fit border-2 border-white border-l-0 border-r-0 border-t-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;