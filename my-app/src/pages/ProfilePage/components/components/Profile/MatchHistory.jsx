import React from 'react';
import { Calendar, Trophy, ChevronRight } from 'lucide-react';
import './MatchHistory.css';

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
    <section className="match-history">
      <h3 className="match-history-title">Recent Battles</h3>
      
      <div className="table-wrapper">
        <table className="matches-table">
          <thead>
            <tr>
              <th>Tournament</th>
              <th>Game</th>
              <th>Date</th>
              <th>Position</th>
              <th>Winnings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={`${match.tournament}-${match.date}`}>
                <td>{match.tournament}</td>
                <td>{match.game}</td>
                <td className="date-cell">
                  <Calendar className="date-icon" />
                  {match.date}
                </td>
                <td className="position-cell">
                  <Trophy className="position-icon" />
                  {match.position}
                </td>
                <td className="winnings">{match.winnings}</td>
                <td>
                  <button className="details-button">
                    <ChevronRight className="details-icon" />
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