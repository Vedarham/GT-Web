import React, { useState } from 'react';
// import { Target, Eye, Globe, Users, Shield, Zap } from 'lucide-react';
import './MissionVision.style.css';

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries in gaming technology',
    // icon: Zap,
  },
  {
    title: 'Community',
    description: 'Building lasting connections',
    // icon: Users,
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest standards',
    // icon: Target,
  },
  {
    title: 'Integrity',
    description: 'Operating with transparency and trust',
    // icon: Shield,
  },
];

export function MissionVision() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="mission-vision-container">
      <div className="mission-vision-content">
        <div className="tabs">
          <div className="tab-buttons">
            {['mission', 'vision'].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

         

        <div className="values-grid">
          {values.map((value) => (
            <div key={value.title} className="value-card">
              {/* <value.icon className="value-icon" /> */}
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* <div className="tab-content">
          {activeTab === 'mission' ? (
            <div className="content-section">
              {/* <Globe className="content-icon" /> */
              // <h3 className="content-title">Our Mission</h3>
              // <p className="content-text">
              //   To provide the most innovative and inclusive gaming platform that empowers players to achieve their full potential while fostering a vibrant, global community.
              // </p>
            // </div>
          // ) : (
            // <div className="content-section">
              /* <Eye className="content-icon" /> */
              // <h3 className="content-title">Our Vision</h3>
              // <p className="content-text">
                // To become the world's leading platform where gaming transcends entertainment, creating opportunities for growth, connection, and achievement.
              // </p>
            // </div>
          // )}
        // </div> */}



