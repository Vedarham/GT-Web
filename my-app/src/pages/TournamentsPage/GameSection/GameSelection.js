import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./GameSelection.style.css"
const games = [
  { name: 'League of Legends', logo: 'lol.jpg' },
  { name: 'Dota 2', logo: 'dota2.jpg' },
  { name: 'Apex Legends', logo: 'apex.jpg' },
  { name: 'CS:GO', logo: 'csgo.jpg' },
  { name: 'Super Smash Bros. Ultimate', logo: 'ssbu.jpg' },
  { name: 'StarCraft II', logo: 'starcraft.jpg' },
];

const GameSelection = () => {
  const navigate = useNavigate();

  const handleGameClick = (game) => {
    navigate(`/tournaments?game=${encodeURIComponent(game)}`);
  };

  return (
    <div className="game-selection-container">
      <div className="game-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card" onClick={() => handleGameClick(game.name)}>
            {/* <img src={require(`./assets/images/${game.logo}`)} alt={game.name} /> */}
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSelection;
