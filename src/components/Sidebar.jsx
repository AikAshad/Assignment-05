import React from 'react';

const Sidebar = ({ stack, handleRemove, handleRemoveAll }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-28">
      
      {/* হেডিংয়ের কালার text-gray-900 করে দেওয়া হয়েছে যাতে স্পষ্টভাবে দেখা যায় */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Stack</h2>
      
      <p className="text-sm text-gray-500 mb-6">
        {stack.length > 0 ? `${stack.length} Technology Selected` : "No Technology Selected"}
      </p>

      {stack.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">Your stack is empty</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center space-x-3">
                {/* আইটেমের নামের সাথে ছোট করে আইকনও দেখানো হচ্ছে */}
                {item.image && <img src={item.image} alt={item.name} className="w-6 h-6 object-contain" />}
                <span className="font-semibold text-gray-800">{item.name}</span>
              </div>
              <button 
                onClick={() => handleRemove(item.id)} 
                className="text-red-500 font-bold hover:bg-red-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                X
              </button>
            </div>
          ))}
          
          <button 
            onClick={handleRemoveAll} 
            className="w-full mt-6 btn bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 min-h-[2.5rem] h-[3rem]"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;