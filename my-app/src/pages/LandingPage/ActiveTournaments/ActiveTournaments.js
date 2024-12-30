import React, { useState } from "react";
import "./ActiveTournaments.style.css";

const ActiveTournaments = () => {
  // Sample match data
  const allMatches = [
    {
      leftTeam: { name: "Shuriken", score: 9, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Dragons", score: 12, logo: "dragons-logo.jpg" },
      date: "17th October 2024, 18:00",
    },
    {
      leftTeam: { name: "Racoons", score: 11, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Erudites", score: 10, logo: "dragons-logo.jpg" },
      date: "20th October 2024, 22:00",
    },
    {
      leftTeam: { name: "Erudites", score: 0, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Fox Unit", score: 0, logo: "dragons-logo.jpg" },
      date: "17th October 2024, 18:00",
    },
    {
      leftTeam: { name: "Oggorilla", score: 0, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Racoons", score: 0, logo: "dragons-logo.jpg" },
      date: "20th October 2024, 20:00",
    },
    {
      leftTeam: { name: "Phoenix", score: 13, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Titans", score: 15, logo: "dragons-logo.jpg" },
      date: "22nd October 2024, 19:00",
    },
    {
      leftTeam: { name: "Lions", score: 18, logo: "shuriken-logo.jpg" },
      rightTeam: { name: "Wolves", score: 21, logo: "dragons-logo.jpg" },
      date: "23rd October 2024, 21:00",
    },
    
  ];

  // State to manage visible matches
  const [visibleMatches, setVisibleMatches] = useState(3); // Initially show 3 matches

  // Function to handle the "More" button
  const handleShowMore = () => {
    setVisibleMatches((prev) => Math.min(prev + 2, allMatches.length)); // Show 2 more matches
  };

  // Helper function to get the image path
  const getImagePath = (logo) => require(`./assets/images/${logo}`);

  return (
    <div className="tournament-page">
      <h1 className="title">Live Tournaments</h1>
      <div className="matches">
        {allMatches.slice(0, visibleMatches).map((match, index) => (
          <div className="match-card" key={index}>
            <div className="team left-team">
              <img
                src={getImagePath(match.leftTeam.logo)}
                alt={match.leftTeam.name}
                className="team-logo"
              />
              <div className="team-info">
                <span className="team-name">{match.leftTeam.name}</span>
                <span className="team-score">{match.leftTeam.score}</span>
              </div>
            </div>
            <div className="vs-section">
              <span className="vs">VS</span>
              <span className="date">{match.date}</span>
            </div>
            <div className="team right-team">
              <div className="team-info">
                <span className="team-name">{match.rightTeam.name}</span>
                <span className="team-score">{match.rightTeam.score}</span>
              </div>
              <img
                src={getImagePath(match.rightTeam.logo)}
                alt={match.rightTeam.name}
                className="team-logo"
              />
            </div>
          </div>
        ))}
      </div>
      {visibleMatches < allMatches.length && (
        <button className="more-button" onClick={handleShowMore}>
          More
        </button>
      )}
    </div>
  );
};

export default ActiveTournaments;
