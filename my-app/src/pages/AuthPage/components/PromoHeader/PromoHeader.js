import React from 'react';
import { FaGift } from "react-icons/fa6";
import './PromoHeader.style.css';

function PromoHeader() {
  return (
    <div className="promo-header">
      <div className="promo-title">
        <FaGift className="promo-icon" />
        <span>Special Offer!</span>
      </div>
      <p className="promo-text">Join Today and Get ₹50 Bonus for Your First Match!</p>
      <p className="promo-subtext">
        Refer your friends and earn ₹50 for each successful sign-up.
      </p>
    </div>
  );
}

export default PromoHeader