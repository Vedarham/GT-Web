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
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/Signup.js';
function App() {
  // const [service , setService] = useState('http://localhost:5000/')
  // useEffect(()=>{
  //   axios.get('/api/arham')
  //   .then((res)=>{
  //     console.log(res.data)
  //   })
  // })

  const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
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
