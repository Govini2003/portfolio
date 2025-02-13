import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    
    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className="nav-logo" />
            <div className='nav-mob-open' onClick={openMenu}>
                <img src={menu_open} alt="menu" />
            </div>

            <ul ref={menuRef} className='nav-menu'>
                <div className="nav-mob-close" onClick={closeMenu}>
                    <img src={menu_close} alt="close" />
                </div>
                
                <li onClick={() => setMenu("home")}>
                    <AnchorLink className='anchor-link' offset={50} href='#home'>
                        <p>Home</p>
                        {menu === "home" ? <img src={underline} alt='' /> : <></>}
                    </AnchorLink>
                </li>
                
                <li onClick={() => setMenu("about")}>
                    <AnchorLink className='anchor-link' offset={50} href='#about'>
                        <p>About Me</p>
                        {menu === "about" ? <img src={underline} alt='' /> : <></>}
                    </AnchorLink>
                </li>
                
                <li onClick={() => setMenu("services")}>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>
                        <p>Projects</p>
                        {menu === "services" ? <img src={underline} alt='' /> : <></>}
                    </AnchorLink>
                </li>
                
                <li onClick={() => setMenu("portfolio")}>
                    <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
                        <p>Portfolio</p>
                        {menu === "portfolio" ? <img src={underline} alt='' /> : <></>}
                    </AnchorLink>
                </li>
                
                <li onClick={() => setMenu("contact")}>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p>Contact</p>
                        {menu === "contact" ? <img src={underline} alt='' /> : <></>}
                    </AnchorLink>
                </li>
            </ul>
            
            <div className='nav-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;