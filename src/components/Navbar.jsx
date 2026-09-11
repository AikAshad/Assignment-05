import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e) => {
    e.preventDefault(); 
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src="/logo.png" alt="Dev Stack Logo" className="h-8 md:h-10 w-auto object-contain" />
          </div>

          <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" onClick={handleLinkClick} className="text-pink-600 font-semibold transition-colors">Home</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Technologies</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Projects</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">About</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="hidden sm:flex items-center space-x-6">
              <a href="#" onClick={handleLinkClick} className="text-sm font-medium text-gray-600 hover:text-pink-600">
                Sign In
              </a>
              <button onClick={handleLinkClick} className="btn rounded-full bg-[#E4207F] hover:bg-[#c9186e] text-white border-none px-7 min-h-[2.5rem] h-[2.5rem] font-medium">
                Sign Up
              </button>
            </div>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-800 hover:text-pink-600 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl px-4 py-6 flex flex-col space-y-4 animate-fade-in-down">
          <a href="#" onClick={handleLinkClick} className="text-pink-600 font-semibold text-center text-lg">Home</a>
          <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-pink-600 text-center font-medium text-lg">Technologies</a>
          <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-pink-600 text-center font-medium text-lg">Projects</a>
          <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-pink-600 text-center font-medium text-lg">About</a>
          <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-pink-600 text-center font-medium text-lg">Contact</a>
          
          <div className="border-t border-gray-100 pt-6 mt-4 flex flex-col space-y-4 sm:hidden px-4">
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-pink-600 text-center font-medium text-lg">Sign In</a>
            <button onClick={handleLinkClick} className="btn rounded-full bg-[#E4207F] hover:bg-[#c9186e] text-white border-none w-full min-h-[3rem] h-[3rem] font-medium text-lg">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;