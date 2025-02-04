import React from 'react';
import {motion, useTime, useTransform} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {


  const navigate = useNavigate()
  return (
    <div id='about' className=" bg-black w-full md:min-h-screen px-4 sm:px-[5vw] md:px-[7vw]">
      <div  className="flex flex-col lg:flex-row lg:gap-10 justify-around items-center pt-44 p-4 lg:p-0">
        {/* Image Section */}
        <div className="bg-neutral-900  border-[1px] border-white/20 overflow-hidden w-full lg:w-[35%] flex items-center justify-center mt-6 lg:mt-24 rounded-xl  md:ml-[30px] min-w-[250px]">
        <div className='relative'>
          <img
            className="rounded-xl border-[1px]  border-white/20 w-full h-full object-cover z-10 relative"
            style={{
              minWidth: '350px', // Minimum width to prevent shrinking
              minHeight: '500px', // Minimum height to prevent shrinking
              maxWidth: '100%', // Ensure it doesn't overflow the container
              maxHeight: 'auto', // Maintain aspect ratio
            }}
            src="https://images.stockcake.com/public/8/2/5/82559b2e-0d40-473e-bc0b-4304b964b751_large/office-working-hours-stockcake.jpg"
            alt="About Image"
          />
        
        </div>
        </div>

        {/* Text Content Section */}
        <div className="mt-16 lg:mt-28 flex flex-col text-white w-full lg:w-auto lg:px-0 md:ml-[30px]">
          {/* Button */}
          <button className="flex items-center w-44 justify-center gap-4 px-4 rounded-lg font-semibold text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
            <div className="bg-white w-2 h-2 rounded-full"></div>
            About Landin
          </button>

          {/* Headings */}
          <motion.h1
          initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,ease:"circInOut" }}
           viewport={{once:true}}
           className="text-[30px] lg:text-[45px] mt-6 lg:mt-10 text-white">
            Building Stronger Brands
          </motion.h1>
          <motion.h1
          initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,ease:"circInOut" }}
           viewport={{once:true}}
           className="text-[30px] lg:text-[45px] text-neutral-400">
            Creating Impressions!
          </motion.h1>

          {/* Description */}
          <motion.p
          initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:2,ease:"circInOut" }}
           viewport={{once:true}}
           className="mt-4 text-neutral-400 text-base max-w-[90%] lg:max-w-[80%]">
            Delivering high-quality, on-demand designs with precision. Elevate
            your brand effortlessly, one snap at a time.
          </motion.p>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-12">
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000"
              alt="Stat Icon"
            />
            <p className="text-base text-neutral-400">From $0 to $500,000 in revenue.</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000"
              alt="Stat Icon"
            />
            <p className="text-base text-neutral-400">47% growth in new customers.</p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col lg:flex-row mt-10 items-center lg:gap-10 gap-6">
           <a href="#about"> <button
            
             className="bg-blue-700 px-5 rounded-lg py-3 w-full lg:w-auto shadow-md shadow-blue-700">
              View about Landin
            </button> </a>

            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                <img
                  width={20}
                  src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
                  alt="Rating Star"
                />
                <img
                  width={20}
                  src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
                  alt="Rating Star"
                />
                <img
                  width={20}
                  src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
                  alt="Rating Star"
                />
                <img
                  width={20}
                  src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
                  alt="Rating Star"
                />
                <img
                  width={20}
                  src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
                  alt="Rating Star"
                />
              </div>
              <p className="text-neutral-400 text-center">200+ Agencies Rated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
