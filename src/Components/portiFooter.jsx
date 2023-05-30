import React from 'react'
import '../AStyles/portifooter.css'

import { FaFacebook, FaHome, FaMailBulk, FaPhone, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const PortiFooter = () => {
    return (
        <div className='porti_Footer'>
            <div className="porti-footer_left">
                <div className="footer_location">
                    <div className="home_icon">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                    </div>
                    <div className="address_first_line">
                        <a href='https://goo.gl/maps/T1KwDhZ4M1vgL3eH8' target='blank' style={{ textDecoration: 'none', color: "white" }}>Shahdara, Lahore</a>
                        <div className="address_second_line">
                            <a href="https://goo.gl/maps/sZ43iHgohPUKo5EV7" target="blank" style={{ textDecoration: 'none', color: "white" }} >Punjab, Pakistan</a>
                        </div>
                    </div>
                </div>
                <div className="footer_phone">
                    <div className="phone_icon">
                        <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                        +92-3257434862
                    </div>
                </div>
                <div className="footer_mail">
                    <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                    Contact on Gmail
                </div>
            </div>
            <div className="porti-footer_right">
                <div className="about_company">
                    About the Company
                </div>
                <div className="footer_paragraph">
                    This is me Muhammad Haseeb Idrees. The Developer of Portifolio. I enjoy discussing new projects and designs challenges.
                </div>
                <div className="social_icons_footer">
                    <a href='https://www.facebook.com/haseeb.idrees.1656/' target='blank'><FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} /></a>
                    <a href='https://www.instagram.com/haseeb.idrees.1656/' targer='blank'><FaInstagram size={20} style={{ color: "white", marginRight: "2rem" }} /></a>
                    <a href='https://github.com/MuhammadHaseebIdrees' target='blank'><FaGithub size={20} style={{ color: "white", marginRight: "2rem" }} /></a>
                </div>
            </div>
        </div>
    )
}

export default PortiFooter