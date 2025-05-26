import React, { useState, useEffect } from 'react';
import "./ProfilePage.style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import EditProfile from './components/EditProfile/EditProfile.js';
import LinkedAccounts from './components/LinkedAccounts/LinkedAcc.js';
import BattleLog from './components/BattleLogs/BattleLogs.js';
import TournamentCard from './components/TournamentCards/TournamentCards.js';
import WalletHistory from './components/WalletHistory/WalletHistory.js';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function updToggle(id) {
    setToggle(id);
  }

  function routeHost() {
    navigate('/host');
  }

  useEffect(() => {
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/profile', {
        withCredentials: true,
      });
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Not authorized:", error);
      navigate('/login');
    }
  }

  getUser();
}, [navigate]); // include navigate only if you're using it inside


  if (loading) return <div className="profile-loading">Loading...</div>;

  return (
    <>
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/068/883/non_2x/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-details">
            <h2>{user?.email}</h2>
            <button className="share-btn">Share</button>
            <div className="action-buttons">
              <button className="add-friend-btn">Add Friend</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
          <div className="profile-settings">
            <button className='follow-btn' onClick={routeHost}>Host a Tournament 📢</button>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat">
            <p>RANK</p>
            <span>{user.rank || 'N/A'}</span>
          </div>
          <div className="stat">
            <p>TOURNAMENTS</p>
            <span>{user.tournamentsCount || '2'}</span>
          </div>
          <div className="stat">
            <p>MEMBER SINCE</p>
            <span>{new Date(user.createdAt).toLocaleDateString() || 'N/A'}</span>
          </div>
          <div className="stat">
            <p>TROPHIES</p>
            <span>{user.trophies || '9000'}</span>
          </div>
        </div>

        <div className="profile-tabs">
          <button className="tab" onClick={() => updToggle(1)}>TOURNAMENTS</button>
          <button className="tab" onClick={() => updToggle(2)}>RECENT BATTLES</button>
          <button className="tab" onClick={() => updToggle(3)}>WALLET HISTORY</button>
          <button className="tab" onClick={() => updToggle(5)}>LINKED ACCOUNTS</button>
          <button className="tab" onClick={() => updToggle(6)}>EDIT PROFILE</button>
        </div>

        <div className={toggle === 1 ? "profile-content" : "content"}>
          <TournamentCard />
        </div>
        <div className={toggle === 2 ? "profile-content" : "content"}>
          <BattleLog />
        </div>
        <div className={toggle === 3 ? "profile-content" : "content"}>
          <WalletHistory />
        </div>
        <div className={toggle === 5 ? "profile-content" : "content"}>
          <LinkedAccounts />
        </div>
        <div className={toggle === 6 ? "profile-content" : "content"}>
          <EditProfile user={user} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
