import React from 'react';
import { Award, Medal, Trophy } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    title: 'First Win',
    description: 'Won your first tournament match',
    icon: Trophy,
    date: '2024-01-15',
  },
  {
    title: '50 Matches',
    description: 'Completed 50 tournament matches',
    icon: Medal,
    date: '2024-02-01',
  },
  {
    title: '₹10,000 Earned',
    description: 'Reached ₹10,000 in total earnings',
    icon: Award,
    date: '2024-02-15',
  },
];

export default function Achievements() {
  return (
    <section className="achievements">
      <h3 className="achievements-title">
        <Trophy className="achievements-icon" />
        Milestones Unlocked
      </h3>
      
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="achievement-card"
          >
            <div className="achievement-content">
              <div className="achievement-icon-wrapper">
                <achievement.icon className="achievement-icon" />
              </div>
              <div className="achievement-info">
                <p className="achievement-title">{achievement.title}</p>
                <p className="achievement-description">{achievement.description}</p>
                <p className="achievement-date">{achievement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}