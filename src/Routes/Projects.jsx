import React from 'react'
import Navbar from '../Components/Navbar'
import PortiFooter from '../Components/portiFooter'
import HeroImageTwo from '../Components/HeroImageTwo'
import PriceCards from '../Components/PriceCards'
import Work from '../Components/Work'
import GamePorti from '../Components/GamePorti'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo heading="PROJECTS."
      para="Some of my most recent works"
      />
      <Work />
      <GamePorti />
      <PriceCards />
      <PortiFooter />
    </div>
  )
}

export default Projects