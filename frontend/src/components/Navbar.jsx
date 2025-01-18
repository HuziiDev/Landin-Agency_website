import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink , useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleDropdownClick = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      className={`fixed w-full z-50 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
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
      <div className="flex bg-transparent h-[70px] md:min-h-[110px] items-center justify-between border-1 border-white shadow-blue-600 shadow-md px-4 md:px-12">
        {/* Logo and Links */}
        <div className="flex items-center md:pl-12 lg:pl-24 xl:pl-32 gap-16">
          <Link to="/">
            <img
              width={70}
              src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
              alt="logo"
            />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-xl text-white font-semibold"
                  : "text-xl text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-xl text-white font-semibold"
                  : "text-xl text-gray-400"
              }
            >
              About
            </NavLink>
            <NavLink to="/portfolio" className="text-xl text-gray-400">
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-xl text-white font-semibold"
                  : "text-xl text-gray-400"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink className="text-xl text-gray-400" href="">
              FAQ
            </NavLink>
          </div>
        </div>

        {/* Button */}
        <div className="flex md:ml-24 items-center ">
          <button onClick={()=> navigate('/contact')} className="text-white bg-blue-700 px-6 py-4 rounded-lg hidden md:block font-semibold">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5-6.75h16.5m-16.5 13.5h16.5"
                />
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
          className="absolute top-18 left-0 w-full h-96 bg-gradient-to-b from-zinc-900 via-blue-900 to-gray-900 flex flex-col gap-2 p-4 transition-transform duration-300 ease-in-out"
        >
          <Link
            onClick={handleDropdownClick}
            to="/"
            className="text-xl text-gray-300 w-full text-center py-2"
          >
            Home
          </Link>
          <Link
            onClick={handleDropdownClick}
            to="/about"
            className="text-xl text-gray-300 w-full text-center py-2"
          >
            About
          </Link>
          <a className="text-xl text-gray-300 w-full text-center py-2" href="">
            Portfolio
          </a>
          <Link
            onClick={handleDropdownClick}
            to="/contact"
            className="text-xl text-gray-300 w-full text-center py-2"
          >
            Contact
          </Link>
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
