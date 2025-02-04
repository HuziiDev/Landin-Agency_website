import React from 'react'
import ServicesCard from './ServicesCard'
import {motion} from 'framer-motion'
import Starter from './Starter'
const OurServices = () => {
  return (
    <div id='services' className='w-full bg-black'>

        <Starter
            btn1="Our Services"
            title1="Get High-Quality"
            title2="Clear Services Remotely."
            desc="Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform."
            btn2="View About Landin"
            isBtn={false}
         />
       


        <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center mt-12  md:gap-6">
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="Landing Pages"
        title2="Increase Profits"
        rate="$100"
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="E-commerce Website"
        title2="Increase Profits"
        rate="Starting from $1000"
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        <ServicesCard
        img1="https://img.icons8.com/?size=100&id=Ie9LFzvLf8DK&format=png&color=000000"
        title1="Mobile Apps"
        title2="Increase Profits"
        rate='Starting from $5000'
        desc="By streamlining the process and focusing on key milestones, we ensure your website is ready to go live quickly, without sacrificing quality."
         />
        </div>
    </div>
  )
}

export default OurServices