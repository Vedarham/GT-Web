import React from 'react';
// import { Trophy, Award, Star } from 'lucide-react';
import './OurStory.style.css';

const milestones = [
  {
    year: 2020,
    title: 'Foundation',
    description: 'Started with a vision to revolutionize gaming',
    // icon: Star,
  },
  {
    year: 2021,
    title: 'First Tournament',
    description: 'Successfully hosted our inaugural championship',
    // icon: Trophy,
  },
  {
    year: 2022,
    title: 'Global Recognition',
    description: 'Received industry recognition for innovation',
    // icon: Award,
  },
];

export function OurStory() {
  return (
    <div className="story-container">
      <div className="story-content">
        <h2 className="story-title">Our Story</h2>
        
        <div className="story-grid">
          <div className="story-text">
            <p className="story-paragraph">
              Founded by passionate gamers, our journey began with a simple yet powerful vision: to create an inclusive gaming ecosystem where every player could thrive. What started as a small community has grown into a global platform, connecting players across borders and cultures.
            </p>
            <p className="story-paragraph">
              Today, we continue to push boundaries, innovate, and create opportunities for gamers worldwide. Our commitment to excellence and community remains at the heart of everything we do.
            </p>
          </div>
          
          <div className="milestones">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="milestone-card">
                <div className="milestone-icon">
                  {/* <milestone.icon /> */}
                </div>
                <div className="milestone-content">
                  <div className="milestone-year">{milestone.year}</div>
                  <div className="milestone-title">{milestone.title}</div>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}