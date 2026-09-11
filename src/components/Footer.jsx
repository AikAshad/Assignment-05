import React from 'react';

const Footer = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Dev Stack Logo" className="h-8 md:h-9 w-auto object-contain mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed pr-4 mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex space-x-4 text-sm font-semibold text-gray-700">
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">GitHub</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Twitter</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-500">
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Home</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Technologies</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-500">
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">About</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Contact</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <div className="flex flex-col space-y-3 text-sm text-gray-500">
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Privacy Policy</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-pink-600 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" onClick={handleLinkClick} className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" onClick={handleLinkClick} className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;