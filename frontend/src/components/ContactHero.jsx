import React from 'react'
import {motion} from 'framer-motion'

const ContactHero = () => {
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
                  
                   className=" text-sm sm:text-base bg-blue-700 px-3 sm:px-4">24/7</motion.button>
                  <p className="text-sm sm:text-base font-semibold text-slate-300">
                   Let's work together
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
            Any Questions Rising?
            
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'linear' }}
            className="text-white text-4xl sm:text-5xl md:text-[70px] lg:text-[90px] font-medium"
          >
            We are All Here.
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mt-2">
          <button className="text-white mt-6 bg-blue-700 px-8 text-lg py-3 mb-8 rounded-lg font-medium shadow-md shadow-blue-700">
          Fill out form
        </button>
           
          </div>
        </motion.div>
       
      </motion.div>
           

     
    </motion.div>
  )
}

export default ContactHero