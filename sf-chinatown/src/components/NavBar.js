import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg'
import { ReactComponent as Brand } from '../assets/icons/logo.svg'

const NavBar = () => {
    // toggle states for mobile view
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className='navBar'>
            <div className='logo'>
                <Brand />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/map">Interactive Map</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Explore</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;