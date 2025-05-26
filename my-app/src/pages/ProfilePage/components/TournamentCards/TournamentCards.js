import React, { useState } from 'react';
import './TournamentCards.style.css';
import { FaTrophy } from 'react-icons/fa';

const tournaments = [
  {
    name: 'Valorant Championship 2025',
    host: 'Riot Games',
    rank: '2nd Place',
    trophies: 3,
    prize: '$5,000',
    status: 'Completed',
  },
  {
    name: 'Fortnite Winter Bash',
    host: 'Epic Games',
    rank: 'Top 10',
    trophies: 1,
    prize: '$2,000',
    status: 'Ongoing',
  },
  {
    name: 'Apex Legends Arena',
    host: 'Respawn Entertainment',
    rank: '5th Place',
    trophies: 2,
    prize: '$3,000',
    status: 'Completed',
  },
];

const TournamentCard = () => {
  const [filter, setFilter] = useState('All');

  const filteredTournaments =
    filter === 'All' ? tournaments : tournaments.filter((t) => t.status === filter);

  return (
    <div className="tournament-container">
      <div className="filter">
        <label>Filter by Status:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Ongoing">Ongoing</option>
        </select>
      </div>

      <div className="card-grid">
        {filteredTournaments.map((tournament, index) => (
          <div key={index} className="tournament-card">
            <div className="trophy-icon">
              <FaTrophy />
            </div>
            <h2>{tournament.name}</h2>
            <p>Host: {tournament.host}</p>
            <p>Rank: {tournament.rank}</p>
            <p>Prize: {tournament.prize}</p>
            <span className={`status ${tournament.status.toLowerCase()}`}>{tournament.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentCard;
