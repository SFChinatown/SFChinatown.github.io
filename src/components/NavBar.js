import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { ReactComponent as Brand } from '../assets/icons/logo.svg'
import DropdownMenu from './DropdownMenu';
import "./DropdownMenu.css"
import { NavItemsList } from './NavItemsList';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-elements'>
                <div className="logo">
                    <Link to="/#"><Brand /></Link>
                </div>
                <div className="nav-items">
                    <DropdownMenu
                        items={NavItemsList}
                        submenu={false}
                    />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;