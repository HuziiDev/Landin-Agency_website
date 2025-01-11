import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Results from '../components/Results'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'
import String from '../components/String'
import OurServices from '../components/OurServices'
import JoinUs from '../components/JoinUs'


const Home = () => {
  return (
    <>
       
        <Navbar/>
        <Hero/>
        <String/>
        <About/>
        <Results/>
        <Features/>
        <Portfolio/>
        <OurServices/>
        <JoinUs/>
     
    </>
  )
}

export default Home