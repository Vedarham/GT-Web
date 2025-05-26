import React from "react";
import "./OrganizerPage.style.css";

const OrganiserCard = ({ organiser }) => {
  return (
    <div className="organiser-card">
      <div className="organiser-image">
        <img
          src={organiser.banner}
          alt="Organiser"
          className="organiser-img"
        />
      </div>
      <div className="organiser-details">
        <h3>{organiser.name}</h3>
        <p>ID: {organiser.id}</p>
        <p>Total Events: {organiser.totalEvents}</p>
        <p>Recent Event: {organiser.recentEvent.title}</p>
        <p>Date: {organiser.recentEvent.date}</p>
        <p>Participants: {organiser.recentEvent.participants}</p>
      </div>
      <div className="organiser-action">
        <button>View Details</button>
      </div>
    </div>
  );
};

const OrganizerPage = () => {
  const organisers = [
    {
      id: 1,
      name: "Emily White",
      totalEvents: 12,
      banner:"https://i.pinimg.com/originals/ef/50/bf/ef50bf5047f7414f078b566821587c5f.jpg",
      recentEvent: {
        title: "Apex Legends Clash",
        date: "10th December 2024",
        participants: 45,
      },
    },
    {
      id: 2,
      name: "John Smith",
      totalEvents: 18,
      banner:"https://img.freepik.com/free-vector/gradient-gaming-concept-facebook-post_23-2149758277.jpg",
      recentEvent: {
        title: "Valorant Championship",
        date: "5th November 2024",
        participants: 60,
      },
    },
    {
      id: 3,
      name: "Sarah Johnson",
      totalEvents: 22,
      banner:"https://marketplace.canva.com/EAFzkT2aSjk/1/0/1600w/canva-dark-blue-neon-modern-gaming-event-banner-lt2qXPytCY0.jpg",
      recentEvent: {
        title: "CS:GO Masters",
        date: "20th October 2024",
        participants: 80,
      },
    },
    {
      id: 4,
      name: "Michael Brown",
      totalEvents: 10,
      banner:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pubg-game-tournament-poster-design-template-034c8b363092011715d173d7fc37da85_screen.jpg?ts=1698379969",
      recentEvent: {
        title: "Overwatch Open",
        date: "15th September 2024",
        participants: 30,
      },
    },
    {
id: 5,
      name: "Vidyut Ambani",
      totalEvents: 69,
      banner:"https://imageio.forbes.com/specials-images/imageserve/5eafec6ded706b0007e654a4/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      recentEvent: {
        title: "Ambani Aura",
        date: "29th February 2024",
        participants:6000,
      },
    },
  ];

  return (
    <div className="organiser-list">
      {organisers.map((organiser) => (
        <OrganiserCard key={organiser.id} organiser={organiser} />
      ))}
    </div>
  );
};

export default OrganizerPage;
