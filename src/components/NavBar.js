import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { ReactComponent as Brand } from '../assets/icons/logo.svg'
import NavItems from './NavItems';
import { NavItemsList } from './NavItemsList';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-elements'>
                <div className="logo">
                    <Link to="/"><Brand /></Link>
                </div>
                <ul className="nav-items">
                    {NavItemsList.map((menu) => {
                        const depthLevel = 0;
                        return <NavItems items={menu} depthLevel={depthLevel} />;
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;