import React from 'react';
import { Trophy, Target, Coins } from 'lucide-react';

const stats = [
  {
    label: 'Win Rate',
    value: '68%',
    icon: Trophy,
    color: 'from-green-500 to-emerald-700',
  },
  {
    label: 'Accuracy',
    value: '92%',
    icon: Target,
    color: 'from-blue-500 to-indigo-700',
  },
  {
    label: 'Total Earnings',
    value: '₹15,000',
    icon: Coins,
    color: 'from-yellow-500 to-orange-700',
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-900/60 rounded-lg p-4 backdrop-blur-sm border border-white/10"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm">{stat.label}</p>
              <p className="text-white font-bold text-xl">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}