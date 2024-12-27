import React, { useState } from "react";
import "./GameSection.style.css";

const GameSection = () => {
  const games = [
    {
      id: 1,
      title: "Call of Duty",
      category: "Shooting",
      image: "path-to-main-image.jpg",
      description:
        "Compete with 100 players on a remote island for a winner-takes-all showdown.",
      rating: 5,
      model: "Compete 100 players",
      controller: "Playstation 5, Xbox, PS4",
    },
    {
      id: 2,
      title: "Battle Grounds",
      category: "Shooting",
      image: "path-to-game2.jpg",
      description:
        "Join thrilling multiplayer battles with high-quality graphics and exciting gameplay.",
      rating: 4,
      model: "Multiplayer battles",
      controller: "PC, Xbox",
    },
    {
      id: 3,
      title: "League of Legends",
      category: "Strategy",
      image: "path-to-game3.jpg",
      description:
        "A strategic game where your decisions impact the outcome of the battle.",
      rating: 4,
      model: "Strategic gameplay",
      controller: "Mobile, PC",
    },
    {
      id: 4,
      title: "Valorant",
      category: "Strategy",
      image: "path-to-game3.jpg",
      description:
        "A strategic game where your decisions impact the outcome of the battle.",
      rating: 4,
      model: "Strategic gameplay",
      controller: "Mobile, PC",
    },
  ];

  // State to track selected game
  const [selectedGame, setSelectedGame] = useState(games[0]);

  return (
    <section className="game-scroll">
      <div className="game-scroll-container">
        <h2 className="game-scroll-title">
          Released <span>Games</span>
        </h2>

        <div className="game-scroll-content">
          {/* Enlarged View (Main Game Display) */}
          <div className="game-scroll-main">
            <img
              src={selectedGame.image}
              alt={selectedGame.title}
              className="game-scroll-main-image"
            />
            <div className="game-scroll-main-details">
              <h3>
                Rating: <span>{"★".repeat(selectedGame.rating)}</span>
              </h3>
              <h2 className="game-scroll-main-title">{selectedGame.title}</h2>
              <ul className="game-scroll-main-meta">
                <li>
                  <strong>Category:</strong> {selectedGame.category}
                </li>
                <li>
                  <strong>Model:</strong> {selectedGame.model}
                </li>
                <li>
                  <strong>Controller:</strong> {selectedGame.controller}
                </li>
              </ul>
              <p>{selectedGame.description}</p>
              <button className="game-scroll-main-buy">Buy Now</button>
            </div>
          </div>

          {/* Sidebar Game List */}
          <div className="game-scroll-sidebar">
            {games.map((game) => (
              <div
                className={`game-scroll-item ${
                  selectedGame.id === game.id ? "active" : ""
                }`}
                key={game.id}
                onClick={() => setSelectedGame(game)}
              >
                <h4>{game.category}</h4>
                <h3>{game.title}</h3>
                <img src={game.image} alt={game.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
