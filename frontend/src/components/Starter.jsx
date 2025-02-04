import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Starter = ({btn1,title1,title2,desc,btn2,isBtn,path}) => {
    const navigate = useNavigate()
  return (
    <div className='text-white flex flex-col justify-center items-center pt-20 '>

          <button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
              <div className=" w-2 h-2 bg-white rounded-full"></div>
              {btn1}
          </button>
              <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "circInOut" }}
                  viewport={{ once: true }}
              className='pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16'>{title1}</motion.h1>
              <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "circInOut" }}
                  viewport={{ once: true }}
              className='text-[30px] md:text-[50px] text-neutral-400 px-5' >{title2}</motion.h1>

              <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "circInOut" }}
                  viewport={{ once: true }}
              className='pt-4 px-5 text-neutral-400 text-base pl-12'>{desc}</motion.p>

                {isBtn &&
                 <a href={path}> <button className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
                {btn2}
                  </button> </a>
                } 
    </div>
  )
}

export default Starter