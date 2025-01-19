import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate()
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
        backgroundImage: "linear-gradient(20deg, #000000, #051225)",
        backgroundSize: "200% 200%",
      }}
      className="h-[750px]  md:max-h-[100vh] bg-black"
    >
      <motion.div className="flex flex-col pt-12  md:pt-24 text-white px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
        {/* New Tag */}
        <motion.div 
        initial={{opacity:0}}
            animate={{opacity:1}}
             transition={{duration:1,ease:"anticipate" }}
           className="flex w-64 sm:w-64 bg-neutral-500/20 border border-gray-400 mt-16  rounded p-2 gap-4 sm:gap-8">
          <motion.button 
          
           className=" text-sm sm:text-base bg-blue-700 px-3 sm:px-4">New</motion.button>
          <p className="text-sm sm:text-base font-semibold text-slate-300">
            No.1 studio of 2025
          </p>
        </motion.div>

        {/* Hero Content */}
        <motion.div className="flex flex-col gap-4 mt-6">
          <motion.h1
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2,ease:"linear" }}
           className="text-white text-4xl sm:text-5xl md:text-[70px] lg:text-[90px] font-medium">
            Premium Agency
          </motion.h1>
          <motion.h1
          initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:3,ease:"linear" }}
           className="text-white text-4xl sm:text-5xl md:text-[70px] lg:text-[90px] font-medium">
            for Creatives
          </motion.h1>
          <motion.p 
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2,ease:"backIn" }}
          className="text-sm sm:text-base md:text-lg w-full md:w-[60%] lg:w-[40%] text-neutral-400">
            We specialize in crafting unique digital presence that help businesses grow and
            stand out in their industries.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <motion.button
            onClick={()=> navigate('/contact')}
              initial={{opacity:0}}
            animate={{opacity:1}}
             transition={{duration:2,ease:"anticipate" }}
             className="bg-white rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-black mt-4 sm:mt-6">
              Connect with us
            </motion.button>
            <motion.button
            onClick={()=> navigate('/about')}
             initial={{opacity:0}}
            animate={{opacity:1}}
             transition={{duration:2,ease:"anticipate" }}
             className="bg-neutral-300/20 rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-white mt-4 sm:mt-6">
              What is landin?
            </motion.button>
          </div>
        </motion.div>
          
        <div className=" mt-28 md:mt-12 overflow-hidden w-full md:w-[30%] ">
        <motion.div
    className="flex gap-8 ">
    {/* First set of logos */}
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 1"
      className="h-10 object-contain"
    />
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 2"
      className="h-10 object-contain"
    />
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 3"
      className="h-10 object-contain"
    />
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 3"
      className="h-10 object-contain"
    />
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 3"
      className="h-10 object-contain"
    />
    <motion.img
      initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
      src="https://framerusercontent.com/images/5Hr06xe33iekloyBybSHJa4e8.svg"
      alt="Company Logo 3"
      className="h-10 object-contain"
    />

   
  </motion.div>

</div>

      </motion.div>
    </motion.div>
  );
};

export default Hero;
