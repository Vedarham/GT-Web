import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TournamentSlider.style.css";

const tournaments = [
  {
    title: "Azariaria's Battlegrounds",
    image: "https://via.placeholder.com/300", // Replace with real image URL
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
    image: "https://via.placeholder.com/300",
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
    image: "https://via.placeholder.com/300",
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
    <>
      <div className="tournament-slider">
      <h2 className="slider-title">Tournaments</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {tournaments.map((tournament, index) => (
          <SwiperSlide key={index}>
            <div className="tournament-card">
              <img
                src={tournament.image}
                alt={tournament.title}
                className="tournament-image"
              />
              <div className="tournament-info">
              <div className="tournament-register">
              <span className="status-tag">{tournament.status}</span>
              <button className="reg-btn">Regsiter</button>
              </div>
                
                <h3 className="tournament-title">{tournament.title}</h3>
                <p className="tournament-type">{tournament.type}</p>
                <div className="tournament-details">
                  <div className="details-row">
                    <span className="icon">🏆</span>
                    <span>{tournament.coins} Coins</span>
                  </div>
                  <div className="details-row">
                    <span className="icon">💰</span>
                    <span>{tournament.entryFee}</span>
                  </div>
                  <div className="details-row">
                    <span className="icon">🎟️</span>
                    <span>{tournament.freeEntry}</span>
                  </div>
                  <div className="details-row">
                    <span className="icon">📅</span>
                    <span>{tournament.date}</span>
                  </div>
                </div>
                <div className="team-player-info">
                  <span>👥 {tournament.teams}/12 Teams</span>
                  <span>👤 {tournament.players} Players</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <a href="/tournaments" className="btn-direct">Explore</a>
    </>
  );
};

export default TournamentSlider;
