import Navigation from './components/NavBar/Navigation.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import axios from "axios"
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.js';
import TournamentsPage from './pages/TournamentsPage/TournamentsPage.js';
import LeaderboardsPage from './pages/LeaderboardsPage/LeaderboardsPage.js';
import FAQPage from './pages/FAQPage/FAQPage.js'
import ContactForm from './pages/ContactPage/ContactPage.js';
// import { useEffect, useState } from 'react';
import OrganizerPage from './pages/OrganizerPage/OrganizerPage.js';
// import Login from './components/Login/Login.js';
// import SignUp from './components/SignUp/Signup.js';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import SubscriptionPage from './pages/SubscriptionPage/SubscPage.js';
import TournamentForm from './pages/ProfilePage/components/TournamentForm/TournamentForm.js';
import AboutPage from './pages/AboutPage/components/AboutPage.js';
import AuthPage from './pages/AuthPage/AuthPage.js';

function App() {

  const router = createBrowserRouter([
    {
      path:"/login",
      element:<AuthPage/>
    },
    // {
    //   path:"/signup",
    //   element:<SignUp/>
    // },
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
    },
    {
      path:"/FAQ",
      element:<FAQPage/>
    },
    {
      path:"/ContactForm",
      element:<ContactForm/>
    },
    {
      path:"/Event-Organizers",
      element:<OrganizerPage/>
    },
    {
      path:"/profile",
      element:<ProfilePage/>
    },
    {
      path:"/shop",
      element:<ShopPage/>
    },
    {
      path:"/subscription",
      element:<SubscriptionPage/>
    },{
      path:"/host",
      element:<TournamentForm/>
    },{
      path:"/about-us",
      element:<AboutPage/>
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
