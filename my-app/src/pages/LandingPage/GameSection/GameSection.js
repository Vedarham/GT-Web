import React, { useState } from "react";
import "./GameSection.style.css";

const GameSection = () => {
  const games = [
    {
      id: 1,
      title: "Call of Duty",
      category: "Shooting",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/w/v/z/small-cod095-call-of-duty-cod-poster-on-300gsm-us-imported-paper-original-imagjr4fd4jvvhc8.jpeg?q=90&crop=false",
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
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ffc59825-213d-4492-8134-b4474fc70593/del21qz-e981744a-c5fc-4047-a934-a6e762a06cc1.jpg/v1/fill/w_1280,h_915,q_75,strp/battleground_game_poster_by_mohimaurya_del21qz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmYzU5ODI1LTIxM2QtNDQ5Mi04MTM0LWI0NDc0ZmM3MDU5M1wvZGVsMjFxei1lOTgxNzQ0YS1jNWZjLTQwNDctYTkzNC1hNmU3NjJhMDZjYzEuanBnIiwiaGVpZ2h0IjoiPD05MTUiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9mZmM1OTgyNS0yMTNkLTQ0OTItODEzNC1iNDQ3NGZjNzA1OTNcL21vaGltYXVyeWEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.r6yZX2Wiq4e8M7HSGI3-qAcGexPhpB7prXgM675tJMc",
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
      image: "https://m.media-amazon.com/images/I/71uOwoEJQFS._AC_UF1000,1000_QL80_.jpg",
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
      image: "https://a-static.besthdwallpaper.com/valorant-video-game-poster-wallpaper-1600x900-116736_47.jpg",
      description:
        "A strategic game where your decisions impact the outcome of the battle.",
      rating: 4,
      model: "Strategic gameplay",
      controller: "Mobile, PC",
    },
  ];


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
                {/* <img src={game.image} alt={game.title} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
