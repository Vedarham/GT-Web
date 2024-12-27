import Leaderboard from "./components/Leaderboard/Leaderboard";
import "./LeaderboardsPage.style.css"
import React from 'react'

const LeaderboardsPage = () => {    
  return (
    <>
     <div className="lboard-container">
      <div className='lboard-category'>
      <button className="lboard-singleplayer">Single Player</button>
      <button className="lboard-multiplayer">Multi Player</button>
        </div>
      <Leaderboard/>
      </div>
    </>
  )
}

export default LeaderboardsPage