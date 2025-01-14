import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/AboutUs'
import Results from '../components/Results'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'
import String from '../components/String'
import OurServices from '../components/OurServices'
import JoinUs from '../components/JoinUs'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


const Home = () => {
  return (
    <>
       
        
        <Hero/>
        <Marquee/>
        <String/>
        <AboutUs/>
        <Results/>
        <Features/>
        <Portfolio/>
        <OurServices/>
        <JoinUs/>
        <Testimonials/>

      
     
    </>
  )
}

export default Home