import React from 'react'
import "./ProfilePage.style.css"
import axios from 'axios'

const ProfilePage = () => {
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8000/api/auth/profile', {
        withCredentials: true
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  } 
  getUser()
  return (
    <>
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-completion">
              <div className="completion-bar"></div>
            </div>
          </div>
          <div className="profile-details">
            <h2>ramjayati@gmail.com</h2>
            <button className="share-btn">Share</button>
            <div className="action-buttons">
              <button className="add-friend-btn">Add Friend</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <p>RANK</p>
            <span>N/A</span>
          </div>
          <div className="stat">
            <p>TOURNAMENTS</p>
            <span>0</span>
          </div>
          <div className="stat">
            <p>MEMBER SINCE</p>
            <span>29-DEC-24 01:37:02</span>
          </div>
          <div className="stat">
            <p>TROPHIES</p>
            <span>N/A</span>
          </div>
        </div>
        <div className="profile-tabs">
          <button className="tab active">SUBSCRIPTIONS</button>
          <button className="tab">ACCOUNTS</button>
          <button className="tab">TOURNAMENTS</button>
          <button className="tab">MATCHES</button>
          <button className="tab">GAMES</button>
          <button className="tab">TEAMS</button>
          <button className="tab">EDIT PROFILE</button>
        </div>
        <div className="profile-content">
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="profile-placeholder"
          />
        </div>
      </div>
    </>
  )
}
export default ProfilePage