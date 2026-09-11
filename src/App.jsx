import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [stack, setStack] = useState([]);

  const handleAddToStack = (tech) => {
    const isExist = stack.find((item) => item.id === tech.id);
    
    if (isExist) {
      toast.warn(`${tech.name} is already in your stack!`, { position: "top-center" });
      return;
    }
    
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, { position: "top-center" });
  };

  const handleRemove = (id) => {
    const newStack = stack.filter((item) => item.id !== id);
    setStack(newStack);
    toast.info('Item removed from stack', { position: "top-center" });
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Stack cleared!', { position: "top-center" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 items-start flex-grow">
        
        <div className="lg:w-3/4 w-full">
          <TechGrid stack={stack} handleAddToStack={handleAddToStack} />
        </div>
        
        <div className="lg:w-1/4 w-full">
          <Sidebar 
            stack={stack} 
            handleRemove={handleRemove} 
            handleRemoveAll={handleRemoveAll} 
          />
        </div>

      </div>

      {/* ফুটার এবং টোস্ট */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;