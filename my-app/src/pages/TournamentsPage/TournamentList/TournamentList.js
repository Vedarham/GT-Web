import "./TournamentList.style.css"
import Modal from  "../../../components/Modal/Modal.js"
import PaymentPage from "../../PaymentPage/PaymentPage.js";
import React, { useState } from 'react'
import { SlRefresh } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

const TournamentList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedGame = queryParams.get('game');
  const tournaments = [
    {
      id: 1,
      heading: "Winter Arc Arena 2",
      logo: "WAA-2.jpg",
      mode: "RPG",
      region: "MENAT",
      type: "Basic",
      event: "Knockout",
      category: "SE",
      subCategory: "1v1",
      game: "League of Legends",
      platform: "PC",
      cost: {type : "Free", amount: "0"},
      date: "Dec 9, 2024 - Dec 10, 2024",
      players: "73/73",
      status: "In Progress"
    },
    {
      id: 2,
      heading: "Frostbite Championship",
      logo: "WAA-2.jpg",
      mode: "MOBA",
      region: "EUW",
      type: "Advanced",
      event: "Elimination",
      category: "Global",
      subCategory: "Team",
      game: "Dota 2",
      platform: "PC",
      cost: {type : "Paid", amount: "500"},
      date: "Jan 5, 2025 - Jan 7, 2025",
      players: "50/50",
      status: "Upcoming"
    },
    {
      id: 3,
      heading: "Battle Royale Showdown",
      logo: "WAA-2.jpg",
      mode: "Battle Royale",
      region: "NA",
      type: "Expert",
      event: "Solo",
      category: "NA",
      subCategory: "Solo",
      game: "Apex Legends",
      platform: "PC",
      cost: {type : "Paid", amount: "1500"},
      date: "Feb 1, 2025 - Feb 3, 2025",
      players: "100/100",
      status: "Registration Open"
    },
    {
      id: 4,
      heading: "Legendary Arena Trials",
      logo: "WAA-2.jpg",
      mode: "Strategy",
      region: "APAC",
      type: "Basic",
      event: "Round Robin",
      category: "SE",
      subCategory: "3v3",
      game: "StarCraft II",
      platform: "PC",
      cost: {type : "free", amount: "0"},
      date: "Mar 15, 2025 - Mar 16, 2025",
      players: "30/30",
      status: "In Progress"
    },
    {
      id: 5,
      heading: "E-sports Masters Cup",
      logo: "WAA-2.jpg",
      mode: "FPS",
      region: "NA",
      type: "Pro",
      event: "Knockout",
      category: "International",
      subCategory: "4v4",
      game: "Counter-Strike: Global Offensive",
      platform: "PC",
      cost: {type : "Paid", amount: "200"},
      date: "Apr 10, 2025 - Apr 12, 2025",
      players: "64/64",
      status: "Registration Closed"
    },
    {
      id: 6,
      heading: "Ultimate Smash Tournament",
      logo: "WAA-2.jpg",
      mode: "Fighting",
      region: "EU",
      type: "Intermediate",
      event: "Bracket",
      category: "Regional",
      subCategory: "1v1",
      game: "Super Smash Bros. Ultimate",
      platform: "Switch",
      cost: {type : "Free", amount: "0"},
      date: "May 3, 2025 - May 5, 2025",
      players: "128/128",
      status: "In Progress"
    }
  ];
  const getImagePath = (logo) => require(`./assets/images/${logo}`);
  const filteredTournaments = selectedGame
    ? tournaments.filter((tour) => tour.game === selectedGame)
    : tournaments;
  
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    
    const handlePaymentClick = (amount) => {
      setSelectedPrice(amount);
      setShowPaymentModal(true);
    };
    

    return (
    <>
      <div className="tour-container">
        <h1>{selectedGame ? `Tournaments for ${selectedGame}` : 'All Tournaments'}</h1>
        <div className="tour-filterbar">
                  <div className="search-bar">
                    <form>
                      <input name="fsrch" id="fsrch" placeholder="Search" />
                      <span><BsSearch /></span>
                    </form>
                  </div>
                  <div className="filter-box filter-modes">
                    <label for="mode">Mode</label>
                    <select id="mode">
                      <option value="rpg">RPG</option>
                      <option value="fps">FPS</option>
                      <option value="rts">RTS</option>
                      <option value="moba">MOBA</option>
                      <option value="card">Card</option>
                      <option value="fighting">Fighting</option>
                      <option value="battleRoyale">Battle Royale</option>
                    </select>
                  </div>
                  <div className="filter-box filter-region">
                    <label for="regions">Region</label>
                    <select id="regions">
                      <option value="All-Regions">All</option>
                      <option value="North-America">NA</option>
                      <option value="Europe">EU</option>
                      <option value="Asia-Pacific">APAC</option>
                      <option value="Korea">KR</option>
                      <option value="Ocenia">OCE</option>
                      <option value="Mid-East-North-Africa">MENAT</option>
                      <option value="Latin-America">LATAM</option>
                      <option value="South-America">SA</option>
                      <option value="India">IN</option>
                      <option value="Japan">JP</option>
                      <option value="China">CN</option>
                    </select>

                  </div>
                  <div className="filter-box filter-eventType">
                    <label for="eventType">Event Type</label>
                    <select id="eventType">
                      <option value="Solo">Solo</option>
                      <option value="Duo">Duo</option>
                      <option value="Squad">Squad</option>
                    </select>
                  </div>
                  <div className="filter-box filter-status">
                    <label for="status">Status</label>
                    <select id="status">
                      <option value="upcoming">upcoming</option>
                      <option value="ongoing">ongoing</option>
                      <option value="completed">compeletd</option>
                    </select>
                  </div>
                  <div className="filter-box filter-cost">
                    <label for="cost">Cost</label>
                    <select id="cost">
                      <option value="free">free</option>
                      <option value="paid">paid</option>
                      <option value="trophies">trophies</option>
                    </select>
                  </div>
                  <a href="/hello"><SlRefresh /></a>
                </div>
          {filteredTournaments.map((Tour, index) => (
            <div key={index} className="tour-list">
              <div className="tour-subcontainer">
                <div className="tour-table">
                  <div className="tour-logs">

                        <div className="tour-logo">
                          <img src={getImagePath(Tour.logo)} alt={Tour.game} />
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
                            <span className="tag-box tag-type">{Tour.cost.type}</span>
                          </div>
                        </div>
                        <div className="tour-lapse">
                        <button 
      className="tag-box tag-cost" 
      onClick={() => handlePaymentClick(Tour.cost.amount)}
    >Pay & Register </button>
    <div className="tour-status">
                          <h3>{Tour.status}</h3>
                          <span>{Tour.players}</span>
                        </div>
                        </div>
                        
                  </div>
                </div>
              </div>
            </div>

            
          ))}
        </div>
        <Modal show={showPaymentModal} onClose={() => setShowPaymentModal(false)}>
  <PaymentPage price={selectedPrice} />
</Modal>

    </>
  )
}

export default TournamentList