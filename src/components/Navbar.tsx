import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center min-w-0">
            <a href="#" className="flex-shrink-0 flex items-center">
              <img src="/LogoSVG.svg" alt="PageKita Logo" className="h-8 w-auto" />
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 min-w-0">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Layanan</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portofolio</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600">Proses</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Harga</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center min-w-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</Link>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Proses</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Harga</a>
            <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 