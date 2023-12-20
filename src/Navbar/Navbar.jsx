import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-700 p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">My App</div>
          <div className="hidden md:flex space-x-4">
            <a href="Home" className="text-white">
              Home
            </a>
            <a href="About" className="text-white">
              About
            </a>
            <a href="Contact" className="text-white">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <a href="Home" className="block text-white mb-2">
              Home
            </a>
            <a href="About" className="block text-white mb-2">
              About
            </a>
            <a href="Contact" className="block text-white mb-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
