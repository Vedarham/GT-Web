import Navigation from './components/NavBar/Navigation.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js';
import TournamentsPage from './pages/TournamentsPage/TournamentsPage.js';
import LeaderboardsPage from './pages/LeaderboardsPage/LeaderboardsPage.js';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"/tournaments",
      element:<TournamentsPage/>
    },
    {
      path:"/leaderboards",
      element:<LeaderboardsPage/>
    }
  ])
  return (
    <div className="App">
    <Navigation/>
    <RouterProvider router={router}/>
   
    </div>
  );
}

export default App;
