import React from 'react'
import FeaturesCard from './FeaturesCard'
import {motion} from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import Starter from './Starter'

const Features = () => {
  const navigate = useNavigate()
  return (
    
    <div className='bg-black w-full '> 

          <Starter
                              btn1="Features"
                              title1="Unlimited Design Features"
                              title2="Delivered In A Seconds!"
                              desc="Get unlimited design features that give you the freedom
                              to create without boundaries.."
                              isBtn={true}
                              btn2="View About Landin"
                              path='/about'
          />
    


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