import React from 'react'
import "./Navigation.css"
const Navigation = () => {
  return (
         <nav className="navbar">
      {/* Left Navigation Links */}
      <div className="nav-left">
        <a href="#home" className="nav-link">Home</a>
        <a href="#tournaments" className="nav-link">Tournaments</a>
        <a href="#tournaments" className="nav-link">News</a>
      </div>

      {/* Logo */}
      <div className="logo">
        <a href="#home">
          <img src="logo.png" alt="Logo" className="logo-img" />
        </a>
      </div>

      {/* Right Navigation Links */}
      <div className="nav-right">
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contact-us" className="nav-link">Contact Us</a>
        <a href="#team" className="nav-link">Team</a>
      </div>
    </nav>

  )
}

export default Navigation