import "./TournamentList.style.css"
import React, { useState } from 'react'
import { SlRefresh } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

const TournamentList = () => {
    const tournaments = [
        {
          id: 1,
          heading: "Winter Arc Arena 2",
          logo:"WAA-2.jpg",
          mode: "RPG",
          region: "MENAT",
          type: "Basic",
          event: "Knockout",
          category: "SE",
          subCategory: "1v1",
          game: "League of Legends",
          platform: "PC",
          cost: "Free",
          date: "Dec 9, 2024 - Dec 10, 2024",
          players: "73/73",
          status: "In Progress"
        },
        {
          id: 2,
          heading: "Frostbite Championship",
          mode: "MOBA",
          region: "EUW",
          type: "Advanced",
          event: "Elimination",
          category: "Global",
          subCategory: "Team",
          game: "Dota 2",
          platform: "PC",
          cost: "Paid",
          date: "Jan 5, 2025 - Jan 7, 2025",
          players: "50/50",
          status: "Upcoming"
        },
        {
          id: 3,
          heading: "Battle Royale Showdown",
          mode: "Battle Royale",
          region: "NA",
          type: "Expert",
          event: "Solo",
          category: "NA",
          subCategory: "Solo",
          game: "Apex Legends",
          platform: "PC",
          cost: "Paid",
          date: "Feb 1, 2025 - Feb 3, 2025",
          players: "100/100",
          status: "Registration Open"
        },
        {
          id: 4,
          heading: "Legendary Arena Trials",
          mode: "Strategy",
          region: "APAC",
          type: "Basic",
          event: "Round Robin",
          category: "SE",
          subCategory: "3v3",
          game: "StarCraft II",
          platform: "PC",
          cost: "Free",
          date: "Mar 15, 2025 - Mar 16, 2025",
          players: "30/30",
          status: "In Progress"
        },
        {
          id: 5,
          heading: "E-sports Masters Cup",
          mode: "FPS",
          region: "NA",
          type: "Pro",
          event: "Knockout",
          category: "International",
          subCategory: "4v4",
          game: "Counter-Strike: Global Offensive",
          platform: "PC",
          cost: "Paid",
          date: "Apr 10, 2025 - Apr 12, 2025",
          players: "64/64",
          status: "Registration Closed"
        },
        {
          id: 6,
          heading: "Ultimate Smash Tournament",
          mode: "Fighting",
          region: "EU",
          type: "Intermediate",
          event: "Bracket",
          category: "Regional",
          subCategory: "1v1",
          game: "Super Smash Bros. Ultimate",
          platform: "Switch",
          cost: "Free",
          date: "May 3, 2025 - May 5, 2025",
          players: "128/128",
          status: "In Progress"
        }
      ];

      const [Tour, setTour] =useState(tournaments[0])
      const getImagePath = (logo) => require(`./assets/images/${Tour.logo}`);
  return (
    <>
        <div className="tour-container">
        <div className="tour-filterbar">
            <div className="search-bar">
            <form>
                <input name="fsrch" id="fsrch" placeholder="Search"/>
                <span><BsSearch /></span>
            </form>       
            </div>
            <div className="filter-box filter-modes">
            <label for="cars">Mode</label>
<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
            </div>
            <div className="filter-box filter-region">
            <label for="cars">Region</label>
<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
            </div>
            <div className="filter-box filter-platform">
            <label for="cars">Platform</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
            </div>
            <div className="filter-box filter-game">
            <label for="cars">Game</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
            </div>
            <a href="#"><SlRefresh /></a>
        </div>
        <div className="tour-table">
        <div className="tour-logs">
        {tournaments.map((Tour,index)=>(            
                <div className="tour-list">
                    <div className="tour-logo">
                        <img src={getImagePath(Tour.logo)} alt={Tour.game}/>
                    </div>
                    <div className="tour-details">
                        <div className="tour-title">
                            <h2>{Tour.heading}</h2>
                        </div>
                        <div className="tour-tags">
                        <span className="tag-box">{Tour.game}</span>
                            <span className="tag-box">{Tour.category}</span>
                            <span className="tag-box">{Tour.subCategory}</span>
                            <span className="tag-box">{Tour.event}</span>
                            <span className="tag-box">{Tour.platform}</span>
                            <span className="tag-box">{Tour.mode}</span>
                            <span className="tag-box tag-type">{Tour.type}</span>
                        </div>
                    </div>
                    <div className="tour-lapse">
                        <h4>{Tour.date}</h4>
                        <span className="tag-box tag-cost">{Tour.cost}</span>
                    </div>
                    <div className="tour-status">
                    <h3>{Tour.status}</h3>
                    <span>{Tour.players}</span>
                    </div>
                </div>
            
            
        ))}
        </div>
        </div>
        </div>
    </>
  )
}

export default TournamentList