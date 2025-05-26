import React, { useState } from 'react';
import './BattleLogs.style.css';
import { FaGamepad } from 'react-icons/fa';

const battles = [
  { game: 'Valorant', status: 'Win', date: '2025-01-15' },
  { game: 'Fortnite', status: 'Loss', date: '2025-01-10' },
  { game: 'Apex Legends', status: 'Win', date: '2025-01-08' },
  { game: 'CS:GO', status: 'Win', date: '2025-01-05' },
  { game: 'PUBG', status: 'Loss', date: '2024-12-30' },
];

const BattleLog = () => {
  const [filterGame, setFilterGame] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredBattles = battles.filter((battle) => {
    return (
      (filterGame === '' || battle.game.toLowerCase().includes(filterGame.toLowerCase())) &&
      (filterStatus === '' || battle.status === filterStatus)
    );
  });

  return (
    <div className="battle-log-container">
      {/* Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by game..."
          value={filterGame}
          onChange={(e) => setFilterGame(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Win">Win</option>
          <option value="Loss">Loss</option>
        </select>
      </div>
      <div className='battle-card-cont'>
      {/* Battle Cards */}
      {filteredBattles.map((battle, index) => (
        <div key={index} className={`battle-card ${battle.status.toLowerCase()}`}>
          <div className="icon">
            <FaGamepad />
          </div>
          <h2>{battle.game}</h2>
          <p>Status: {battle.status}</p>
          <p>Date: {battle.date}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BattleLog;
