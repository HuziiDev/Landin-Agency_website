import React from 'react'
import PortfilioCard from './PortfilioCard'
import fanfit from '../assets/fanfit.png'
import {motion} from 'framer-motion'
import Starter from './Starter'
const Portfolio = () => {
  
  return (
    <div className='bg-black w-full'>

            <Starter
                         btn1="Portfolio"
                         title1="Unlimited Design Features"
                         title2="Delivered In A Seconds!"
                         desc="Get unlimited design features that give you the freedom
                               to create without boundaries."
                        isBtn={true}
                        btn2="View About Landin"
                        path='/about'
            />
        

          <div className="card_container gap-5 py-[15vh]   w-[90%] mx-auto flex flex-col  justify-center items-center">
            <PortfilioCard
              
              img={fanfit}
              title="Audi"
              tech1="React"
              tech2="Node"
              tech3="Express"
              tech4="MongoDB"
              tech5="Tailwind"
              tech6="Framer-motion"
            
            />
            <PortfilioCard
              img="https://imteg.weebly.com/uploads/5/4/9/8/54982803/2421183_orig.jpg"
              title="Audi"
              tech1="React"
              tech2="Node"
              tech3="Express"
              tech4="MongoDB"
              tech5="Tailwind"
              tech6="Framer-motion"
            
            />
            <PortfilioCard
              img="https://imteg.weebly.com/uploads/5/4/9/8/54982803/2421183_orig.jpg"
              title="Audi"
              tech1="React"
              tech2="Node"
              tech3="Express"
              tech4="MongoDB"
              tech5="Tailwind"
              tech6="Framer-motion"
            
            />
            <PortfilioCard
              img="https://imteg.weebly.com/uploads/5/4/9/8/54982803/2421183_orig.jpg"
              title="Audi"
              tech1="React"
              tech2="Node"
              tech3="Express"
              tech4="MongoDB"
              tech5="Tailwind"
              tech6="Framer-motion"
            
            />
      </div>


    </div>
  )
}

export default Portfolio