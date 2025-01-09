import React, { useRef } from 'react';
import gsap from 'gsap';

const String = () => {
  const boxRef = useRef(null);

  const handleMouseEnter = (e) => {
    const newY = e.clientY; // Get the current Y position of the mouse
    const newX = e.clientX; // Get the current Y position of the mouse
    const path = `M 10 100 Q ${newX} ${newY} 990 100`; // Create new path with dynamic Y

    gsap.to(boxRef.current, {
      attr: { d: path },
      duration: 0.5, // Control animation speed
      ease: 'elastic.out(1, 0.3)', // Spring effect easing
    });
  };

  const handleMouseLeave = () => {
    const defaultPath = 'M 10 100 Q 500 100 990 100'; // Default path
    gsap.to(boxRef.current, {
      attr: { d: defaultPath },
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)', // Spring effect on reset
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-[200px] w-[100%] bg-black"
    >
      <svg
        className="w-full h-full "
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={boxRef}
          d="M 10 100 Q 500 100 990 100"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default String;
