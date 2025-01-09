import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Results from '../components/Results'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Results/>
        <Features/>
    </>
  )
}

export default Home