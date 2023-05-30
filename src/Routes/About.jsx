import React from 'react'
import Navbar from '../Components/Navbar'
import PortiFooter from '../Components/portiFooter'
import HeroImageTwo from '../Components/HeroImageTwo'
import AboutTextSection from '../Components/AboutTextSection'
import AboutSkills from '../Components/AboutSkills'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo heading="ABOUT."
      para="I'm a friendly Front-End Developer"
      />
      <AboutTextSection />
      <AboutSkills />
      <PortiFooter />
    </div>
  )
}

export default About