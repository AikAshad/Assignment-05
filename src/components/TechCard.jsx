import React from 'react';

const TechCard = ({ tech, stack, handleAddToStack }) => {
  const isAdded = stack.find((item) => item.id === tech.id);

  return (
    <div className={`bg-white rounded-2xl border p-6 flex flex-col h-full transition-all duration-300 ${isAdded ? 'border-pink-500 shadow-md' : 'border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:border-gray-200'}`}>
      
      {/* টপ অংশ: আইকন এবং ব্যাজ */}
      <div className="flex justify-between items-start mb-4">
        {tech.image && (
          <img src={tech.image} alt={tech.name} className="w-10 h-10 object-contain" />
        )}
        
        {/* ডানদিকের ডাইনামিক কালার ব্যাজ */}
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide ${tech.badgeClass || 'bg-blue-50 text-blue-500'}`}>
          {tech.badge || 'Popular'}
        </span>
      </div>
      
      {/* টাইটেল এবং ডেসক্রিপশন */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-grow">
        {tech.description}
      </p>
      
      {/* মাঝের ইনফো অংশ: ক্যাটাগরি, ডিফিকাল্টি, রেটিং */}
      <div className="flex justify-between items-center text-xs font-semibold text-gray-600 mb-6">
        <span>{tech.category || 'Frontend'}</span>
        <span>{tech.difficulty || 'Beginner-Friendly'}</span>
        <span className="flex items-center">
          <span className="text-yellow-400 text-sm mr-1">★</span> {tech.rating || '4.8'}
        </span>
      </div>
      
      {/* একদম নিচের কালো বাটন */}
      <button 
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg text-sm font-bold transition-all ${
          isAdded 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-[#111827] text-white hover:bg-gray-800 shadow-md'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
      
    </div>
  );
};

export default TechCard;