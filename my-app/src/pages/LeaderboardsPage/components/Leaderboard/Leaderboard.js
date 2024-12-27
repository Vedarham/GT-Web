import React from 'react';
import './Leaderboard.style.css';

const Leaderboard = () => {
  const SinglePlayer = [
    { 
      id: 1, 
      username: "arhamastra", 
      avatar: "arhamastra.jpg", 
      won: 96, 
      lost: 217, 
      coins: 1765,
      game: "League of Legends", 
      category: "RPG", 
      platform: "PC",
      region: "NA", 
      gamesPlayed: 313 // Total number of games played
    },
    { 
      id: 2, 
      username: "shadowknight", 
      avatar: "arhamastra.jpg", 
      won: 120, 
      lost: 150, 
      coins: 2045,
      game: "Dota 2", 
      category: "MOBA", 
      platform: "PC",
      region: "EU", 
      gamesPlayed: 270 // Total number of games played
    },
    { 
      id: 3, 
      username: "galaxywarrior", 
      avatar: "arhamastra.jpg", 
      won: 75, 
      lost: 250, 
      coins: 1360,
      game: "Fortnite", 
      category: "Battle Royale", 
      platform: "PC",
      region: "Asia", 
      gamesPlayed: 325
    },
    { 
      id: 4, 
      username: "the_immortal", 
      avatar: "arhamastra.jpg", 
      won: 200, 
      lost: 100, 
      coins: 3500,
      game: "Call of Duty", 
      category: "FPS", 
      platform: "PC",
      region: "APAC", 
      gamesPlayed: 300
    },
    { 
      id: 5, 
      username: "ragingbull", 
      avatar: "arhamastra.jpg", 
      won: 50, 
      lost: 300, 
      coins: 900,
      game: "PUBG", 
      category: "Battle Royale", 
      platform: "Mobile",
      region: "LATAM", 
      gamesPlayed: 350
    },
    { 
      id: 6, 
      username: "cryptic_warrior", 
      avatar: "arhamastra.jpg", 
      won: 150, 
      lost: 180, 
      coins: 2700,
      game: "Apex Legends", 
      category: "Battle Royale", 
      platform: "PC",
      region: "EU", 
      gamesPlayed: 250
    }
  ];

  const calculateWinPercentage = (won, lost) => {
    const totalGames = won + lost;
    return totalGames > 0 ? (won / totalGames) * 100 : 0;
  };

  // Filtering out players who haven't played a minimum number of games in live counting / 10 must be criteria
  const MIN_GAMES_PLAYED = 10;
  const filteredPlayers = SinglePlayer.filter(player => player.gamesPlayed >= MIN_GAMES_PLAYED);
  const sortedPlayers = filteredPlayers.sort((a, b) => calculateWinPercentage(b.won, b.lost) - calculateWinPercentage(a.won, a.lost));

  const getImagePath = (avatar) => require(`./assets/images/${avatar}`);

  return (
    <>
        <div className="lboard-table">
          <div className="lboard-logs">
            {sortedPlayers.map((sp, index) => (
              <div className="lboard-list" key={index}>
                <div className="lboard-logo">
                  <img src={getImagePath(sp.avatar)} alt={sp.username} />
                </div>
                <div className="lboard-details">
                  <div className="lboard-title">
                    <h2>{sp.username}</h2>
                  </div>
                  <div className="lboard-tags">
                    <span className="tag-box">Wins : {sp.won}</span>
                    <span className="tag-box">Loses: {sp.lost}</span>
                    <span className="tag-box">{sp.game}</span>
                     {/* <span className="tag-box">{sp.category}</span>
                        <span className="tag-box">{sp.region}</span>
                        <span className="tag-box">{sp.platform}</span> */}
                  </div>
                </div>
                <div className="lboard-status">
                  <h3>🏆 {sp.coins}</h3>
                  <p>Win %: {calculateWinPercentage(sp.won, sp.lost).toFixed(2)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Leaderboard;
