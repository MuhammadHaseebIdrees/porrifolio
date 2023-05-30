import React, { Component } from 'react'
import '../AStyles/HeroImageTwo.css'

class HeroImageTwo extends Component {
    render(){
  return(
    <div className = 'her_image_two_div' >
            <div className="inner_hero_tag">
                <h1>{this.props.heading}</h1>
                <p>{this.props.para}</p>
            </div>
    </div>
  )
    }
}

export default HeroImageTwo