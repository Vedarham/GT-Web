import React from 'react';
// import { ArrowRight } from 'lucide-react';
import './CallToAction.style.css';

export function CallToAction() {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">
          Join Our Mission
        </h2>
        <p className="cta-text">
          Be part of a growing community that's shaping the future of gaming.
          Together, we can create something extraordinary.
        </p>
        <button className="cta-button">
          Get Started
          {/* <ArrowRight className="arrow-icon" /> */}
        </button>
      </div>
    </div>
  );
}