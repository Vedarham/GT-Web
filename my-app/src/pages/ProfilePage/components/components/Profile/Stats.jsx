import React from 'react';
import { Trophy, Target, Coins } from 'lucide-react';
import './Stats.css';

const stats = [
  {
    label: 'Win Rate',
    value: '68%',
    icon: Trophy,
    class: 'win-rate'
  },
  {
    label: 'Accuracy',
    value: '92%',
    icon: Target,
    class: 'accuracy'
  },
  {
    label: 'Total Earnings',
    value: '₹15,000',
    icon: Coins,
    class: 'earnings'
  }
];

export default function Stats() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <div className="stat-content">
            <div className={`stat-icon-wrapper ${stat.class}`}>
              <stat.icon className="stat-icon" />
            </div>
            <div>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}