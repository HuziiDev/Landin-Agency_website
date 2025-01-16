import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import gsap from 'gsap';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import lenis from './lenis';

import { ToastContainer} from 'react-toastify';
import About from './pages/About';
const App = () => {
  useEffect(() => {
    // Lenis is already initialized and animating in lenis.js
    return () => {
      lenis.destroy(); // Clean up Lenis when the component unmounts
    };
  }, []);



  const cursorRef = useRef(null); // Ref for the custom cursor

  useEffect(() => {
    // Mouse move listener
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8, 
        ease: 'back.out',
      });
    };

  
    document.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black relative ">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed h-[20px] w-[20px] bg-white rounded-full pointer-events-none z-50"
        
      ></div>

      {/* Main Content */}
         <ToastContainer />
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
       <Footer/>
    </div>
  );
};

export default App;
