import React from 'react'
import FeaturesCard from './FeaturesCard'
import {motion} from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'

const Features = () => {
  const navigate = useNavigate()
  return (
    
    <div className='bg-black w-full '>
     <div className='text-white flex flex-col justify-center items-center pt-20 '>

<button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
    <div className=" w-2 h-2 bg-white rounded-full"></div>
    Features
  </button>
    <motion.h1
             initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
            viewport={{ once: true }}
             className='pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16'>Unlimited Design Features</motion.h1>
    <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
            viewport={{ once: true }}
     className='text-[30px] md:text-[50px] text-neutral-400 px-5' >Delivered In A Seconds!</motion.h1>

    <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "circInOut" }}
            viewport={{ once: true }}
    className='pt-4 px-5 text-neutral-400 text-base pl-12'>Get unlimited design features that give you the freedom
    to create without boundaries.</motion.p>

    <NavLink to='/about' className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
    View About Landin
  </NavLink>
</div>


<div className="w-[90%] mx-auto flex flex-wrap justify-center items-center  md:gap-6">
  {/* Card Container */}
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing."
        isPro={true}
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=AjbG1kSZPR8H&format=png&color=000000"
        title1="Customizable assets"
        title2="Editable Designs"
        desc="Easily modify and personlize design element to fit your brand's identity."
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=keBcBKOGXSw7&format=png&color=000000"
        title1="Bug Less Development"
        title2="Optimized Code"
        desc="Our bug less code ensures that your website runs smooth and fast."
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=104236&format=png&color=000000"
        title1="Award Winning Designs"
        title2="Recognized Designs"
        desc="Our designs showcase creativity that sets us apart in the industry."
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=13686&format=png&color=000000"
        title1="Lightning Fast delivery"
        title2="Quick Turnaround"
        desc="Ensuring your deliverables are ready when you need them, with great quality."
        isPro={true}
        
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=32313&format=png&color=000000"
        title1="Mobile Friendly"
        title2="Responsive"
        desc="Our mobile-friendly design ensures your desing looking stunning across all devices."
         />
</div>

    </div>
  )
}

export default Features