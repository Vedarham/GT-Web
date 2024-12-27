import Navigation from './components/NavBar/Navigation.js';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js';
import TournamentsPage from './pages/TournamentsPage/TournamentsPage.js';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <LandingPage/>
    <TournamentsPage/>
    </div>
  );
}

export default App;
