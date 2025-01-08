import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Results from '../components/Results'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Results/>
    </>
  )
}

export default Home