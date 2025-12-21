import React, { useState, useEffect, useRef } from 'react'
import { FiSun } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import './Navbar.css'

const Navbar = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

//   Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className='flex between wrapper navbar'>

        <a href="#" className='logo'>
          <span>N</span> Naveen.
        </a>

        {/* Desktop Menu */}
        <ul className='flex gap-2 desktop-menu'>
          <li><a href="" className='links'>Home</a></li>
          <li><a href="" className='links'>Services</a></li>
          <li><a href="" className='links'>About Me</a></li>
          <li><a href="" className='links'>Projects</a></li>
          <li><a href="" className='links'>Contact Me</a></li>
        </ul>

        <div className='flex gap-2 nav-actions'>
          <a href="" className='icon-container border-inverse'>
            <FiSun size={25} />
          </a>

          <a href="" className='btn'>
            Let's Tolk
          </a>

          <a className='hamburger' onClick={toggleMenu}>
            {isMenuActive ? <HiMiniXMark /> : <FaBarsStaggered />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={menuRef}
          className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : ''}`}
        >
          <li><a href="" className='links' onClick={closeMenu}>Home</a></li>
          <li><a href="" className='links' onClick={closeMenu}>Services</a></li>
          <li><a href="" className='links' onClick={closeMenu}>About Me</a></li>
          <li><a href="" className='links' onClick={closeMenu}>Projects</a></li>
          <li><a href="" className='links' onClick={closeMenu}>Contact Me</a></li>
          <li><a href="" className='btn' onClick={closeMenu}>Let's Tolk</a></li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar;
