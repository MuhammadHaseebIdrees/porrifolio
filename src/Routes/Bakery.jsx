import React from 'react'
import '../AStyles/Bakery.css'


import BakeryNav from '../Components/BakeryNav'
import BakeryFeature from '../Components/BakeryFeature'
import BakeryProducts from '../Components/BakeryProducts'
import BakeryTeam from '../Components/BakeryTeam'
import BakeryOurNews from '../Components/BakeryOurNews'
import BakeryContactUs from '../Components/BakeryContactUs'

const Bakery = () => {
  return (
    <div className='bakery_main'>
        <BakeryNav />
        <BakeryFeature />
        <BakeryProducts />
        <BakeryTeam />
        <BakeryOurNews />
        <BakeryContactUs />
    </div>
  )
}

export default Bakery