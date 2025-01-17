import React from 'react'
import {motion} from 'framer-motion'
const Marquee = () => {
  return (
    <div className='w-full py-10 rounded-3xl bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900'>
        <div className='text flex gap-10 whitespace-nowrap overflow-hidden'>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[10vw] leading-none font-semibold uppercase -mb-[7vw] pb-10 md:pb-20   whitespace-nowrap '>We are Landin</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[10vw] leading-none font-semibold uppercase -mb-[7vw] pb-10 md:pb-20    whitespace-nowrap '>We are Landin</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[10vw] leading-none font-semibold uppercase -mb-[7vw] pb-10 md:pb-20  whitespace-nowrap '>We are Landin</motion.h1>
             
        </div>
    </div>
  )
}

export default Marquee