import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(20deg, #000000, #00008B)",
        backgroundSize: "200% 200%",
      }}
      className="h-[750px] md:min-h-screen bg-black"
    >
      <div className="flex flex-col text-white px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
        {/* New Tag */}
        <div className="flex w-64 sm:w-64 bg-neutral-500/20 border border-gray-400 mt-16 sm:mt-32 rounded p-2 gap-4 sm:gap-8">
          <button className=" text-sm sm:text-base bg-blue-700 px-3 sm:px-4">New</button>
          <p className="text-sm sm:text-base font-semibold text-slate-300">
            No.1 studio of 2025
          </p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col gap-4 mt-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-[70px] font-semibold">
            Premium Agency
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-[70px] font-semibold">
            for Creatives
          </h1>
          <p className="text-sm sm:text-base md:text-lg w-full md:w-[70%] lg:w-[60%] text-neutral-400">
            We specialize in crafting unique digital presence that help businesses grow and
            stand out in their industries.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <button className="bg-white rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-black mt-4 sm:mt-6">
              Connect with us
            </button>
            <button className="bg-neutral-300/20 rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-white mt-4 sm:mt-6">
              What is landin?
            </button>
          </div>
        </div>
          
        <div className="mt-32 overflow-hidden w-full md:w-[60%] ">
        
  <motion.div
    className="flex gap-8"
    initial={{ x: 0 }}
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      duration: 20, // Adjust the duration as needed
      repeat: Infinity, // Infinite repeat
      ease: "linear",
    }}
  >
    {/* First set of logos */}
    <img
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 1"
      className="h-10 object-contain"
    />
    <img
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 2"
      className="h-10 object-contain"
    />
    <img
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 3"
      className="h-10 object-contain"
    />

   
  </motion.div>
</div>

      </div>
    </motion.div>
  );
};

export default Hero;
