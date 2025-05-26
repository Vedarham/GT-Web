import React from 'react';
import { Edit, Trophy, Gamepad2 } from 'lucide-react';
import './ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <button className="edit-button">
        <Edit className="icon" />
      </button>
      
      <div className="profile-content">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <img
              src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&q=80"
              alt="Profile"
              className="avatar-image"
            />
          </div>
          <div className="avatar-overlay">
            <Edit className="icon" />
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">ProGamer123</h2>
          <p className="profile-tagline">Conqueror of Arenas | Rank #125</p>
          <div className="profile-stats">
            <div className="stat-item">
              <Trophy className="stat-icon" />
              <span>156 Wins</span>
            </div>
            <div className="stat-item">
              <Gamepad2 className="stat-icon" />
              <span>342 Matches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}