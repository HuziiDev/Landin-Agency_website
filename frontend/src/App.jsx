import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import gsap from 'gsap';

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
    <div className="w-full h-screen bg-black relative ">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed h-[20px] w-[20px] bg-white rounded-full pointer-events-none z-50"
        
      ></div>

      {/* Main Content */}
      <Home />
    </div>
  );
};

export default App;
