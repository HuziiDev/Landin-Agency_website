import React from 'react'
import {motion} from 'framer-motion'

const AboutHero = () => {
  return (
    <motion.div
    initial={{ backgroundPosition: '0% 50%' }}
    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      backgroundImage: 'linear-gradient(20deg, #000000, #051225)',
      backgroundSize: '200% 200%',
    }}
    className="h-[60vh] md:h-[90vh] bg-black  pt-2  "
  >
    <motion.div className="flex flex-col text-white items-center">
      {/* New Tag */}
      <motion.div 
              initial={{opacity:0}}
                  animate={{opacity:1}}
                   transition={{duration:1,ease:"anticipate" }}
              className="flex w-64 sm:w-64 bg-neutral-500/20 border border-gray-400 mt-16  rounded p-2 gap-4 sm:gap-8">
                <motion.button 
                
                 className=" text-sm sm:text-base bg-blue-700 px-3 sm:px-4">2025</motion.button>
                <p className="text-sm sm:text-base font-semibold text-slate-300">
                 Dig Deep About Us
                </p>
              </motion.div>

      {/* Hero Content */}
      <motion.div className="flex flex-col gap-4 mt-8 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'linear' }}
          className="text-white text-4xl sm:text-5xl md:text-[70px] lg:text-[90px] font-medium"
        >
         Learn More About Landin
          
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: 'linear' }}
          className="text-white text-4xl sm:text-5xl md:text-[70px] lg:text-[90px] font-medium"
        >
          Let’s Deep Dive!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'backIn' }}
          className="text-sm sm:text-base md:text-lg w-full md:w-[60%] lg:w-[60%] text-neutral-400 mx-auto"
        >
         Whether you have a question, need assistance,
         or want to start a new project, our team is here to help.
        </motion.p>

        {/* Buttons */}
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4 sm:gap-8">
                   <motion.button
                     initial={{opacity:0}}
                   animate={{opacity:1}}
                    transition={{duration:2,ease:"anticipate" }}
                    className="bg-white rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-black mt-4 sm:mt-6">
                     Connect with us
                   </motion.button>
                   <motion.button
                    initial={{opacity:0}}
                   animate={{opacity:1}}
                    transition={{duration:2,ease:"anticipate" }}
                    className="bg-neutral-300/20 rounded-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 text-white mt-4 sm:mt-6">
                     What is landin?
                   </motion.button>
                 </div>
      </motion.div>
     
    </motion.div>
         

   
  </motion.div>
  )
}

export default AboutHero