import React, { useState, useEffect } from 'react';
import TechCard from './TechCard';

const TechGrid = ({ stack, handleAddToStack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    );
  }

  return (
    <div>
      {/* ছবির মতো হুবহু হেডিং এবং সাব-টাইটেল */}
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
          Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm lg:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      
      {/* ৩-কলামের গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <TechCard 
            key={tech.id} 
            tech={tech} 
            stack={stack} 
            handleAddToStack={handleAddToStack} 
          />
        ))}
      </div>
    </div>
  );
};

export default TechGrid;