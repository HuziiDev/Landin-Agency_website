import React,{useRef, useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfilioCard = ({img,title,tech1,tech2,tech3,tech4, tech5,tech6,isFirst}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isFirst && cardRef.current) {
      // Apply GSAP ScrollTrigger only to the first card
      gsap.to(cardRef.current, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 15%',
          end: 'bottom 15%',
         // Use markers for debugging
          scrub: true, // Smooth scrub animation
          
        },
      });
    }
  }, [isFirst]);
  return (
      <div   ref={cardRef}  className=" sticky top-[15vh] cursor-pointer card  shadow-md shadow-blue-600 w-[90%] h-80 md:h-[90%] flex flex-col justify-center items-center bg-zinc-900 mb-10 rounded-lg ">
    <img
      className="w-[95%] md:w-[98%] md:pb-2 md:pt-2  h-[95%] rounded-lg"
      src={img}
      alt=""
    />

    <div className="card absolute h-[18%] md:h-[15%] lg:h-[12%] xl:h-[10%]  bottom-3  w-[90%] rounded-lg bg-zinc-900 overflow-hidden">
      <div className="flex justify-between items-center w-[90%]   mt-3 mx-auto">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <button className="cursor-default  md:hidden px-2 py-1 bg-zinc-800  border-2 border-gray-500 rounded-lg text-neutral-400">2024</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500 rounded-lg text-neutral-400">{tech1}</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500   rounded-lg text-neutral-400">{tech2}</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500  rounded-lg text-neutral-400">{tech3}</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500  rounded-lg text-neutral-400">{tech4}</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500  rounded-lg text-neutral-400">{tech5}</button>
        <button className="cursor-default hidden md:block px-2 py-1 bg-transparent border-2 border-gray-500  rounded-lg text-neutral-400">{tech6}</button>
        
      </div>
    </div>
  </div>
  )
}

export default PortfilioCard