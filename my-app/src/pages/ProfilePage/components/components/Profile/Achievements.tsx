import React from 'react';
import { Award, Medal, Trophy } from 'lucide-react';

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
    <section className="mt-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
        Milestones Unlocked
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-gray-900/60 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:border-blue-500 transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-colors">
                <achievement.icon className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-medium">{achievement.title}</p>
                <p className="text-white/60 text-sm">{achievement.description}</p>
                <p className="text-white/40 text-xs mt-1">{achievement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}