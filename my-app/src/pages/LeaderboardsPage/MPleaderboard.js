import React from 'react'
import Leaderboard from './components/Leaderboard/Leaderboard'

const MPleaderboard = () => {
  const teams = [
    {
      id: 1,
      teamName: "Team Alpha",
      players: [1, 2, 3],
      totalWins: 291,
      totalLosses: 617,
      totalCoins: 5170
    },
    {
      id: 2,
      teamName: "Team Bravo",
      players: [4, 5, 6],
      totalWins: 400,
      totalLosses: 580,
      totalCoins: 9200
    }
  ];
  return (
    <Leaderboard/>
  )
}

export default MPleaderboard