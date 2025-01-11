import React from 'react'
import {motion} from 'framer-motion'
const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-3xl  bg-white'>
        <div className='text flex gap-10  border-t-2 border-b-2 whitespace-nowrap overflow-hidden border-zinc-900 '>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[17vw] leading-none font-semibold uppercase -mb-20 pt-10  whitespace-nowrap '>We are Landin</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[17vw] leading-none font-semibold uppercase -mb-20 pt-10  whitespace-nowrap '>We are Landin</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:'-100%'}}
            transition={{ease:'linear', repeat: Infinity, duration: 5}}
             className='text-[17vw] leading-none font-semibold uppercase -mb-20 pt-10 pb-20  whitespace-nowrap '>We are Landin</motion.h1>
             
        </div>
    </div>
  )
}

export default Marquee