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
        <a href='/profile' className='nav-link'>Profile</a>
      </div>

      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Logo" className="logo-img" />
        </a>
      </div>

      {/* Right Navigation Links */}
      <div className="nav-right">
      <a href="/Event-Organizers" className="nav-link">Organizers</a>
      <a href="/subscription" className="nav-link">Subscription</a>
        <a href="/FAQ" className="nav-link">FAQ</a>
        <a href="/ContactForm" className="nav-link">Contact Us</a>
        <a href="/Ourteam" className="nav-link">Team</a>
        <a href='/login' className='nav-link'>Login</a>
        <a href='/signup' className='nav-link'>SignUp</a>
        {/* <a href='/logout' className='nav-link'>Logout</a> */}
      </div>
    </nav>

  )
}

export default Navigation