import React from 'react'

const JoinUs = () => {
  return (
    <div className='w-full bg-black'>
      <div 
     
      className="card text-white pt-24 flex flex-col justify-center items-center w-[90%] bg-gradient-to-r from-black via-blue-900 to-black  rounded-lg mx-auto">
      <button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
    <div className=" w-2 h-2 bg-white rounded-full"></div>
    Join Us
  </button>

     <h1 className='pt-8 text-[30px] md:text-[50px] text-white' >Each Project, Our</h1>
     <h1 className='text-[30px] md:text-[50px] text-neutral-400'>Design is Great.</h1>

     <p className='text-neutral-400 w-[70%] pl-4 mt-4 md:text-lg md:w-[40%]' >Ready to take the next step? Join us now and start transforming your vision into reality with expert support.</p>

     <a href="#form"><button className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
    Book an Appointment
  </button></a>
      </div>


    </div>
  )
}

export default JoinUs