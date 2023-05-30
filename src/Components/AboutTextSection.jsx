import React from 'react'
import { Link } from 'react-router-dom'
import '../AStyles/AboutTextSection.css'

import image1 from '../Assets/imageP1.jpg'
import image2 from '../Assets/imageP2.jfif'

const AboutTextSection = () => {
    return (
        <div className='about_text_section'>
            <div className="about_sec_left">
                <h1 className="who_i_am">
                    Who Am I?
                </h1>
                <p className='about_descript'>
                    I am a <span id='bold_react_text'>React Front-End</span> Developer. I create responsive secure websites for my clients.
                </p>
                <Link to='/contact'>
                    <button className='about_contact_btn'>
                        CONTACT
                    </button>
                </Link>
            </div>
            <div className="about_sec_right">
                <div className="image_container">
                    <div className="image_stack about_right_image_top">
                        <img src={image1} alt="true" className='image_about' />
                    </div>
                    <div className="image_stack about_right_image_bottom">
                        <img src={image2} alt="true" className='image_about' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTextSection