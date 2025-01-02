import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram,FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="text-white">
      {/* Footer Links Section */}
      <div className=" bg-gradient-to-r from-blue-400 to-purple-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow TechMakeEasy</h3>
              <div className="flex space-x-4 mb-2 ">
                <a href="#" className="text-white transition-colors cursor-pointer">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white transition-colors cursor-pointer">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="pl-2 space-y-2 text-white font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Announcement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">General</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inside TechMakeEasy</a></li>
              </ul>
            </div>


            {/* Office Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Office</h3>
              <address className="not-italic text-white">
                No 21,<br />
                51 Crescent Michael Jackson Street,<br />
                Gwarimpa,<br />
                Abuja,<br />
                Nigeria.
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-700">
        <div className="container mx-auto px-4 py-6 font-bold">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white text-sm mb-2 md:mb-0 max-w-72">
              © 2024-2025 TechMakeEasy. All Rights Reserved.
            </p>
            <div>
              <a href="#" className="text-gray-600 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-purple-500 p-3 rounded-md shadow-lg"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;