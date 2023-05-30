import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../AStyles/Navbar.css"

import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false)
    const [color, setColor] = useState(false)

    const ChangeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", ChangeColor);

    return (
        <div className={`navbar_main ${color? "navbar_main_bgcolor" : ""}`}>
            <div className="navbar_logo">
                <h1>
                    <Link to="/">
                        Portifolio
                    </Link>
                </h1>
            </div>
            <div className={`navbar_links_div ${toggleIcon ? "showNav" : ""}`}>
                <div className="narbar_single_link">
                    <Link to='/'>Home</Link>
                </div>
                <div className="narbar_single_link">
                    <Link to='/projects'>Projects</Link>
                </div>
                <div className="narbar_single_link">
                    <Link to='/about'>About</Link>
                </div>
                <div className="narbar_single_link">
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
            <div className='responsive_toogle_icons'
                onClick={() => setToggleIcon(!toggleIcon)}
            >
                {toggleIcon ?
                    <FaTimes size={20} style={{ color: "white" }} /> :
                    <FaBars size={20} style={{ color: "white" }} />}
            </div>
        </div>
    )
}

export default Navbar