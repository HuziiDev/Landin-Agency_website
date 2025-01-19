import React,{MouseEventHandler} from 'react'
import TestimonialCard from './TestimonialCard'
import {motion} from 'framer-motion'
import Starter from './Starter'
const Testimonials = () => {
    
  return (
    <div className='w-full bg-black'>
         <Starter
                btn1="Testimonial"
                title1="Customer Reviews About"
                title2="Work, Usability and Design."
                desc="Hear from our happy clients! See how we’ve helped them achieve
                        their goals and create lasting impact."
                        isBtn={true}
                btn2="View About Landin"
                path='/contact'
           />
          
         <div
            style={{perspective:2000}}

            className="w-[90%] mx-auto flex flex-wrap justify-center items-center mt-12  md:gap-6">
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