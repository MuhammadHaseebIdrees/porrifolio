import React from 'react'
import { Link } from 'react-router-dom'
import '../AStyles/herosection.css'

import laptop from '../Assets/pexels-cottonbro-studio-5054347.jpg'

const HeroSection = () => {
    return (
        <div className='hero_section_div'>
            <div className="background_mask">
                <img src={laptop} className="intro_image" />
            </div>
            <div className="upper_content">
                <div className='freelancer_text'>
                    HI, I'M A FREELANCER.
                </div>
                <div className="react_developer_text">
                    React Developer
                </div>
                <div className="buttons_two_portifolio">
                    <Link className='single_btn project_btn' to="/projects">
                        PROJECTS
                    </Link>
                    <Link className='single_btn contact_btn' to="/contact">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection