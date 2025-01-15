import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import gsap from 'gsap';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

import { ToastContainer} from 'react-toastify';
import About from './pages/About';
const App = () => {
  const cursorRef = useRef(null); // Ref for the custom cursor

  useEffect(() => {
    // Mouse move listener
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8, // Smoothness of the cursor movement
        ease: 'back.out',
      });
    };

    // Add the event listener for mouse movement
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the listener on component unmount
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
