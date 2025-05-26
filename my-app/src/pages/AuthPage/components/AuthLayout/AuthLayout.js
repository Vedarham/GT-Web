import React from 'react';
import { HiTrophy } from "react-icons/hi2";
import { FaGamepad } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import "./AuthLayout.style.css"
const FloatingElement = ({ children, className }) => (
  <div className={`floating-element ${className}`}>
    {children}
  </div>
);

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="left-section">
        <div className="overlay"></div>
        <FloatingElement className="floating-trophy">
          <HiTrophy className='sicon'/>
        </FloatingElement>
        <FloatingElement className="floating-gamepad">
          <FaGamepad className="sicon" />
        </FloatingElement>
        <FloatingElement className="floating-headphones">
          <FaHeadphones className="sicon" />
        </FloatingElement>

        <div className="text-container">
          <h1 className="heading">Level Up Your Esports Journey!</h1>
          <p className="subheading">Compete, Connect, and Conquer with gamers across India</p>
      
          <div className="map-illustration"></div>
        </div>
      </div>

      <div className="right-section">
        <div className="form-container">
          {children}
        </div>
      </div>
    </div>
  );
}


export default AuthLayout