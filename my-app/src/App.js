import Navigation from './components/NavBar/Navigation.js';
import './App.css';
import LandingPage from './pages/landing/landing.js';
import ActiveTournaments from './pages/ActiveTournaments/ActiveTournaments.js';
import TournamentSlider from './pages/Tournaments/TournamentSlider.js';
import GameSection from './pages/GameSection/GameSection.js';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <LandingPage/>
    <ActiveTournaments/>
    <TournamentSlider/>
    <GameSection/>
    </div>
  );
}

export default App;
