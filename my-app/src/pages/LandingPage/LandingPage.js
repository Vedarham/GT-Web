import React from 'react'
import GameSection from './GameSection/GameSection.js'
import TournamentSlider from './Tournaments/TournamentSlider.js'
import ActiveTournaments from './ActiveTournaments/ActiveTournaments.js'
import Hero from './Hero/Hero.js'

const LandingPage = () => {
  return (
    <div>
    <Hero/>
    <ActiveTournaments/>
    <TournamentSlider/>
    <GameSection/>
    </div>
  )
}

export default LandingPage