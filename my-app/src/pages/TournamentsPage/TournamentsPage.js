import React from 'react'
import "./TournamentsPage.style.css"
import TournamentSlider from "../LandingPage/Tournaments/TournamentSlider.js"
import TournamentList from './TournamentList/TournamentList.js'
// import TournamentCarousel from './TournamentCarousel/TournamentCarousel.js'
const TournamentsPage = () => {
  return (
    <>
    <TournamentSlider/>
    {/* <TournamentCarousel/> */}
       <TournamentList/> 
    </>
  )
}

export default TournamentsPage