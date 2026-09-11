import React from 'react';
import { toast } from 'react-toastify';

const Hero = () => {
  // স্ক্রল করে নিচে যাওয়ার ফাংশন
  const handleExplore = () => {
    window.scrollBy({ top: 600, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    toast.info('More information coming soon!', { position: 'bottom-right', autoClose: 2000 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-base lg:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button 
            onClick={handleExplore}
            className="btn rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none px-8 w-full sm:w-auto min-h-[3rem] h-[3rem] hover:scale-105 transition-transform"
          >
            Explore Technologies
          </button>
          <button 
            onClick={handleLearnMore}
            className="btn btn-outline rounded-full px-8 border-gray-300 text-gray-700 w-full sm:w-auto min-h-[3rem] h-[3rem] hover:bg-gray-50 hover:border-gray-400"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img 
          src="/banner-stack.png" 
          alt="Development Stack Banner" 
          className="w-full max-w-md lg:max-w-lg drop-shadow-2xl" 
        />
      </div>
    </div>
  );
};

export default Hero;