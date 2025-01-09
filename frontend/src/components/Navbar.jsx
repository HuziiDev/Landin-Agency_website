import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(150deg, #000000, #051225)",
        backgroundSize: "200% 200%",
      }}
    >
      {/* Navbar */}
      <div className="flex bg-transparent h-[70px] md:min-h-[110px] items-center justify-between border-1 border-white shadow-blue-600   shadow-md px-4 md:px-12">
        {/* Logo and Links */}
        <div className="flex items-center md:pl-12 lg:pl-24 xl:pl-32 gap-16">
          <img
           width={70}
          
            src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
            alt="logo"
          />

          <div className="hidden md:flex gap-8 items-center">
            <a className="text-xl text-gray-300" href="">
              Home
            </a>
            <a className="text-xl text-gray-400" href="">
              About
            </a>
            <a className="text-xl text-gray-400" href="">
              Portfolio
            </a>
            <a className="text-xl text-gray-400" href="">
              Contact
            </a>
            <a className="text-xl text-gray-400" href="">
              FAQ
            </a>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center ">
          <button className="text-white bg-blue-700 px-6 py-4 rounded-lg hidden   md:block font-semibold">
            Get in Touch
          </button>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5-6.75h16.5m-16.5 13.5h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
       
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(150deg, #000000, #000080)",
        backgroundSize: "200% 200%",
      }}
          className="absolute top-18 left-0 w-full h-96 bg-gradient-to-b from-zinc-900 via-blue-900 to-gray-900 flex flex-col  gap-2 p-4 transition-transform duration-300 ease-in-out"
        >
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            Home
          </a>
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            About
          </a>
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            Portfolio
          </a>
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            Contact
          </a>
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            FAQ
          </a>

          <button className="text-white bg-blue-700 px-8 py-2 rounded-lg font-semibold mx-auto w-[90%]">
            Get in Touch
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
