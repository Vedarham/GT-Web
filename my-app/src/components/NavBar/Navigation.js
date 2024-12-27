import React from 'react'
import "./Navigation.css"
const Navigation = () => {
  return (
         <nav className="navbar">
      {/* Left Navigation Links */}
      <div className="nav-left">
        <a href="/" className="nav-link">Home</a>
        <a href="/tournaments" className="nav-link">Tournaments</a>
        <a href="/leaderboards" className="nav-link">Leaderboards</a>
        <a href="/news" className="nav-link">News</a>
        <a href="/shop" className="nav-link">Shop</a>
      </div>

      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logo" className="logo-img" />
        </a>
      </div>

      {/* Right Navigation Links */}
      <div className="nav-right">
      <a href="/organisers" className="nav-link">Organisers</a>
      <a href="/subscription" className="nav-link">Subscription</a>
        <a href="/faq" className="nav-link">FAQ</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
        <a href="/Ourteam" className="nav-link">Team</a>
      </div>
    </nav>

  )
}

export default Navigation