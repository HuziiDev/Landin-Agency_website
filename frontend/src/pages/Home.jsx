import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Results from '../components/Results'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Results/>
        <Features/>
        <Portfolio/>
    </>
  )
}

export default Home