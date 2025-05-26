import React from "react";
import "./Hero.style.css";

const Hero = () => {
  return (
    
      <div className="hero-page">
      <div className="bg-shadow">  </div>
      <div className="content-section">
        <h1 className="main-heading">Unleash the Gamer in You!</h1>
        <h2 className="sub-heading">Experience the Best Moments</h2>
        <p className="context">
        Compete, Win, and Rise to Glory in India's Esports Platform
        </p>
        <div className="button-group">
          <button className="btn btn-register">Sign Up & Get ₹50 Extra</button>
          <button className="btn btn-ticket">Join a Tournament Now</button>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
