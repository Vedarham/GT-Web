import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "./TournamentSlider.style.css";

const tournaments = [
  {
    title: "Azariaria's Battlegrounds",
    image: "https://img.freepik.com/free-psd/gaming-template-design_23-2151251078.jpg?w=360", 
    status: "Playing",
    type: "Torneo Individual",
    coins: 75,
    entryFee: "$49.97",
    freeEntry: "Free Entry",
    date: "OCT 07, 5:10 AM",
    teams: 12,
    players: 128,
  },
  {
    title: "Superliga Weekly",
    image: "https://img.freepik.com/free-psd/gaming-template-design_23-2151251076.jpg",
    status: "Playing",
    type: "Torneo Individual",
    coins: 75,
    entryFee: "$49.97",
    freeEntry: "Free Entry",
    date: "OCT 07, 5:10 AM",
    teams: 12,
    players: 128,
  },
  {
    title: "Liga Triunfo",
    image: "https://img.freepik.com/free-psd/gaming-template-design_23-2151251070.jpg",
    status: "Playing",
    type: "Torneo Individual",
    coins: 75,
    entryFee: "$49.97",
    freeEntry: "Free Entry",
    date: "OCT 07, 5:10 AM",
    teams: 12,
    players: 128,
  },
];

const TournamentSlider = () => {

  return (
    <div className="slider-container">
      <div className="slider">
        {tournaments.map((tournament, index) => (
          <div className="tournaments" key={index}>
            <img src={tournament.image} alt={tournament.title} />
            <div className="card-content">
              <h3>{tournament.title}</h3>
              <p>
                <strong>🏆 Trophies:</strong> {tournament.trophies}
              </p>
              <p>
                <strong>🛡️ Type:</strong> {tournament.type}
              </p>
              <p>
                <strong>🎮 Host:</strong> {tournament.host}
              </p>
              <p>
                <strong>💸 Entry Fee:</strong> {tournament.entryFee}
              </p>
              <p>
                <strong>📅 Date:</strong> {tournament.date}
              </p>
              <button className="register-btn">Register</button>
            </div>
          </div>
        ))}
      </div>
      <button className="explore-btn"><a href="/tournaments">Explore More</a></button>
    </div>
  );

};

export default TournamentSlider;
