import React from 'react';
import './AboutHero.style.css';

export function AboutHero() {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          About Us
        </h1>
        <p className="hero-subtitle">
          Our Journey, Our Mission, Our Vision
        </p>
        <button className="hero-button">
          Join Our Community
        </button>
      </div>
      
      <div className="scroll-indicator">
        {/* <ChevronDown className="scroll-icon" /> */}
      </div>
    </div>
  );
}