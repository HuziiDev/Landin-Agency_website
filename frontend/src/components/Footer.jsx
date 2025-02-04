import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import { toast } from "react-toastify"; 


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
       // Smooth scrolling
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pozns9q', 'template_csibt4g', form.current, {
        publicKey: '_yHvvyCmEDpptH9Fx',
      })
      .then(
        () => {
        toast("Message sent")

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <motion.footer
    initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(20deg, #000000, #051225)",
        backgroundSize: "200% 200%",
      }}
     className=" text-white py-10 mt-24">
      <div className="container  px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
        {/* Branding Section */}
        <div>
          <div className=" mb-4">
          <img
           width={70}
          
            src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
            alt="logo"
          />
          </div>
          <p className="text-gray-400 mb-4">
            Created with 💙 by Static Studio.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Enter your email..."
                name="user-email"
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
           
           <a className="cursor-pointer" onClick={scrollToTop} >  <li>Home</li> </a>
          <a href="#services"> <li>Services</li></a>
           <a href="#about"> <li>About Us</li> </a>
           <a href="#form"> <li>Contact</li></a>
           <a  href="#faq"> <li>FAQs</li></a>
          </ul>
        </div>

        {/* Social Links */}
        <div >
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-gray-400">
          <a href="https://x.com/landin_agency">  <li>Twitter</li> </a>
           <a href="https://www.instagram.com/landin_web_agency/"><li>Facebook</li> </a> 
           <a href="https://www.instagram.com/landin_web_agency/"><li>Instagram</li> </a> 
           <a href=""> <li>LinkedIn</li> </a>
          </ul>
        </div>

        {/* Sales Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Sales Info</h4>
          <p className="text-gray-400">Total Sales: 7,360,109</p>
          <div className="mt-4 bg-gray-800 p-4 rounded-md">
            <p className="text-sm">Showcasing our latest milestones!</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        © 2025 Landin Web Agency. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
