import React from 'react'
// import TournamentSlider from "../LandingPage/Tournaments/TournamentSlider.js"
import TournamentList from './TournamentList/TournamentList.js'
import GameSelection from './GameSection/GameSelection.js'
// import TournamentCarousel from './TournamentCarousel/TournamentCarousel.js'
const TournamentsPage = () => {
  return (
    <>
    <GameSelection/>
    <TournamentList/> 
    </>
  )
}

export default TournamentsPage