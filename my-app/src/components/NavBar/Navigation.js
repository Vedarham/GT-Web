import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Navigation.css";
import Logo from "../../assets/images/EN-logo.png"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="logo">
        <a href="/">
          <img src={Logo} alt="eSports_Nation_Logo" className="logo-img" />
        </a>
      </div>
   
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      {/* this state is temporarily added onClick it will be active and on ful-screencit will automatic close */}
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
          <a href="/tournaments" className="nav-link">Tournaments</a>
          <a href="/leaderboards" className="nav-link">Leaderboards</a>
          {/* <a href="/news" className="nav-link">News</a> */}
          <a href="/shop" className="nav-link">Shop</a>
          <a href='/profile' className='nav-link'>Profile</a>
        </div>
        <div className="nav-right">
          <a href="/Event-Organizers" className="nav-link">Organizers</a>
          <a href="/subscription" className="nav-link">Subscription</a>
          <a href="/FAQ" className="nav-link">FAQ</a>
          <a href="/ContactForm" className="nav-link">Contact Us</a>
          <a href="/about-us" className="nav-link">About Us</a>        
        <a href="/login" className="nav-link login-btn">Login</a>
    
        </div>
       
      </div>
      
    </nav>
  );
};

export default Navigation;