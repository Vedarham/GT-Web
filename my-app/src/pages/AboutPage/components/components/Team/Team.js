import React from 'react';
// import { Github, Linkedin, Twitter } from 'lucide-react';
import './Team.style.css';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Gaming industry veteran with 15+ years of experience',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Tech innovator with a passion for gaming infrastructure',
  },
  {
    name: 'Emily Watson',
    role: 'Community Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Building bridges between players and platforms',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    bio: 'Full-stack developer specializing in gaming solutions',
  },
];

export function Team() {
  return (
    <div className="team-container">
      <div className="team-content">
        <h2 className="team-title">Meet Our Team</h2>
        
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                
                {/* <div className="social-links">
                  <a href="#" className="social-link">
                    <Linkedin />
                  </a>
                  <a href="#" className="social-link">
                    <Twitter />
                  </a>
                  <a href="#" className="social-link">
                    <Github />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}