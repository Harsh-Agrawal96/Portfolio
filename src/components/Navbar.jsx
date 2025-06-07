import React, { useEffect, useState } from 'react';
import '../public/css/Navbar.css';

import { CgGitFork } from "react-icons/cg";
import logo from "../Assets/logo.jpeg";
import { FaPhone } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt='Logo image' />
        </a>
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        <a href="mailto:harshagrawal9650@gmail.com" className="nav-contact nav-btn" onClick={closeMenu}>
          <FaPhone /> Contact
        </a>
        <a
          href="https://github.com/Harsh-Agrawal96"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn nav-fork"
          onClick={closeMenu}
        >
          <CgGitFork />
          <AiFillStar />
        </a>

      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;

