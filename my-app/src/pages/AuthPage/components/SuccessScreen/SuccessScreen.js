import React, { useEffect } from 'react';
import { HiTrophy } from "react-icons/hi2";
import { IoSparkles } from "react-icons/io5";
import { FaGift } from 'react-icons/fa';
import { FaCircleArrowRight } from "react-icons/fa6";
import confetti from '../../../../utils/confetti.js';
import './SuccessScreen.style.css';
import { useNavigate } from 'react-router-dom';

function SuccessScreen({ type, username, onContinue }) {

  const navigate = useNavigate()
  useEffect(() => {
    if (type === 'signup') {
      confetti();
    }
  }, [type]);

  if (type === 'login') {
    return (
      <div className="success-screen login">
        <div className="icon-wrapper bounce">
          <IoSparkles className="ssicon" />
        </div>
        <h2>Welcome back, {username}!</h2>
        <p>Ready to continue your gaming journey?</p>
        <button onClick={onContinue} className="continue-button">
          Continue to Dashboard
          <FaCircleArrowRight className="button-icon" />
        </button>
      </div>
    );
  }

  return (
    <div className="success-screen signup">
      <div className="icon-wrapper pulse">
        <HiTrophy className="ssicon" />
      </div>
      <div className="content">
        <h2>
          Welcome to the team, {username}!
          <IoSparkles className="sparkle-icon" />
        </h2>
        <div className="reward-box">
          <div className="reward-header">
            <FaGift className="gift-icon" />
            <span>Rewards Unlocked!</span>
          </div>
          <p>You've earned ₹50 bonus for signing up!</p>
        </div>
      </div>
      <button onClick={onContinue} className="start-button">
        Start Gaming Now
        {/* <ArrowRight className="button-icon" /> */}
      </button>
    </div>
  );
}
export default SuccessScreen