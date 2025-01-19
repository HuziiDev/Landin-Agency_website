import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/AboutUs'
import Results from '../components/Results'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'

import OurServices from '../components/OurServices'
import JoinUs from '../components/JoinUs'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Faq from '../components/Faq'


const Home = () => {
  return (
  <div>
       
        
        <Hero/>
        <Marquee/>
        
        <AboutUs/>
        <Results/>
        <Features/>
        <Portfolio/>
        <OurServices/>
        <JoinUs/>
        <Testimonials/>
        {/* <Faq/> */}

      
     
        </div>
  )
}

export default Home