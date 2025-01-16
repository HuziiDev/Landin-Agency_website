import React from 'react'
import ServicesCard from './ServicesCard'
import {motion} from 'framer-motion'
const OurServices = () => {
  return (
    <div className='w-full bg-black'>
        <div className='text-white flex flex-col justify-center items-center pt-12 '>

        <button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
            <div className=" w-2 h-2 bg-white rounded-full"></div>
            Our Services
        </button>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "circInOut" }}
                viewport={{ once: true }}
             className='pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16'>Get High-Quality</motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "circInOut" }}
                viewport={{ once: true }}
             className='text-[30px] md:text-[50px] text-neutral-400 px-5' >Clear Services Remotely.</motion.h1>

            <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, ease: "circInOut" }}
                  viewport={{ once: true }}
             className='pt-4 px-5 text-neutral-400 text-base pl-12'>Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform.</motion.p>

            
        </div>


        <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center mt-12  md:gap-6">
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        </div>
    </div>
  )
}

export default OurServices