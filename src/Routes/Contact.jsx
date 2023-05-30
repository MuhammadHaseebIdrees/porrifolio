import React from 'react'
import Navbar from '../Components/Navbar'
import PortiFooter from '../Components/portiFooter'
import HeroImageTwo from '../Components/HeroImageTwo'
import FormPorti from '../Components/FormPorti'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImageTwo heading="CONTACT."
        para="Lets have a Chat!"
      />
      <FormPorti />
      <PortiFooter />
    </div>
  )
}

export default Contact