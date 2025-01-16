import React from 'react'
import TestimonialCard from './TestimonialCard'
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <div className='w-full bg-black'>
            <div className='text-white flex flex-col justify-center items-center pt-20 '>

        <button className="flex items-center  justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
            <div className=" w-2 h-2 bg-white rounded-full"></div>
            Testimonial
        </button>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "circInOut" }}
                viewport={{ once: true }}
             className='pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16'>Customer Reviews About</motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "circInOut" }}
                viewport={{ once: true }}
             className='text-[30px] md:text-[50px] text-neutral-400 px-5' >Work, Usability and Design.</motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, ease: "circInOut" }}
                viewport={{ once: true }}
             className='pt-4 px-5 text-neutral-400 text-base pl-12'>Hear from our happy clients! See how we’ve helped them achieve
            their goals and create lasting impact.</motion.p>

                <button className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
                View About Landin
            </button>
        </div>
        <div className="w-[90%] mx-auto flex flex-wrap justify-center items-center mt-12  md:gap-6">
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />
            <TestimonialCard
            img1="https://framerusercontent.com/images/OYzxFsmc3ulgxa94ZWms9Q9fBUY.png"
            img2="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        name1="John Smith"
        position="CEO"
        desc="They not only delivered Top-Notch website but also provided strategic insights that helped us improve our overall digital experience."
        company="Inovative Solutions"

            />

        </div>


    </div>
  )
}

export default Testimonials