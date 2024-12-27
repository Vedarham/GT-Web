import React from "react";
import "./Hero.style.css";

const Hero = () => {
  return (
    <div className="hero-page">
      {/* Left Section */}
      <div className="content-section">
        <h1 className="main-heading">Welcome to the Event</h1>
        <h2 className="sub-heading">Experience the Best Moments</h2>
        <p className="context">
          Join us for an unforgettable experience. Register now or grab your ticket today!
        </p>
        <div className="button-group">
          <button className="btn btn-register">Register</button>
          <button className="btn btn-ticket">Get Ticket</button>
        </div>
      </div>

      {/* Right Section for Image */}
      <div className="image-section">
        <img
          src="./"
          alt="Event"
          className="landing-image"
        />
      </div>
    </div>
  );
};

export default Hero;
