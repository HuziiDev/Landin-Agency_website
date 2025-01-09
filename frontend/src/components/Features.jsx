import React from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    
    <div className='bg-black w-full '>
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


<div className="w-[90%] mx-auto flex flex-wrap justify-center items-center gap-6">
  {/* Card Container */}
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
         <FeaturesCard 
         img1="https://img.icons8.com/?size=100&id=81068&format=png&color=000000"
        title1="Boost Your Revenue"
        title2="Increase Profits"
        desc="Unlock new revenue streams with data-driven Strategies and marketing"
         />
</div>

    </div>
  )
}

export default Features