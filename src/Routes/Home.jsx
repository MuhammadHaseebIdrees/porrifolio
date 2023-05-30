import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/heroSection'
import PortiFooter from '../Components/portiFooter'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Work />
        <PortiFooter />
    </div>
  )
}

export default Home