import React from 'react';
import { Calendar, Trophy, ChevronRight } from 'lucide-react';

const matches = [
  {
    tournament: 'BGMI Pro League',
    game: 'BGMI',
    date: '2024-02-20',
    position: '1st',
    winnings: '₹5,000',
  },
  {
    tournament: 'COD Mobile Cup',
    game: 'COD Mobile',
    date: '2024-02-18',
    position: '2nd',
    winnings: '₹2,500',
  },
  {
    tournament: 'Free Fire Championship',
    game: 'Free Fire',
    date: '2024-02-15',
    position: '3rd',
    winnings: '₹1,000',
  },
];

export default function MatchHistory() {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-bold text-white mb-4">Recent Battles</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-white/60 border-b border-white/10">
              <th className="text-left py-3 px-4">Tournament</th>
              <th className="text-left py-3 px-4">Game</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Position</th>
              <th className="text-left py-3 px-4">Winnings</th>
              <th className="text-left py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr
                key={`${match.tournament}-${match.date}`}
                className="text-white border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4">{match.tournament}</td>
                <td className="py-3 px-4">{match.game}</td>
                <td className="py-3 px-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                  {match.date}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                    {match.position}
                  </div>
                </td>
                <td className="py-3 px-4 text-green-400">{match.winnings}</td>
                <td className="py-3 px-4">
                  <button className="p-1 hover:bg-white/10 rounded transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}