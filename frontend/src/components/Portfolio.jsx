import React from 'react'
import PortfilioCard from './PortfilioCard'
import fanfit from '../assets/fanfit.png'
const Portfolio = () => {
  
  return (
    <div className='bg-black w-full'>
        <div className='text-white flex flex-col justify-center items-center pt-20 '>

    <button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
        <div className=" w-2 h-2 bg-white rounded-full"></div>
        Features
    </button>
        <h1 className='pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16'>Unlimited Design Features</h1>
        <h1 className='text-[30px] md:text-[50px] text-neutral-400 px-5' >Delivered In A Seconds!</h1>

        <p className='pt-4 px-5 text-neutral-400 text-base pl-12'>Get unlimited design features that give you the freedom
        to create without boundaries.</p>

        <button className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
        View About Landin
    </button>
    </div>

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
        isFirst={true}
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
        isFirst={true}
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
        isFirst={true}
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
        isFirst={true}
      />
</div>


    </div>
  )
}

export default Portfolio