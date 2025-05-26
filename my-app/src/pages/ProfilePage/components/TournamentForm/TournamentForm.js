import React, { useState } from 'react';
import axios from "axios"
import { useForm } from 'react-hook-form';
import './TournamentForm.style.css';

const TournamentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tournaments, setTournaments] = useState([]);

  

  const onSubmit = async (data) => {
    try{
      const response = await axios.post('http://localhost:8080/api/host',data,{
        withCredentials:true,
      })
      setTournaments([...tournaments, { ...data, id: Date.now() }]);
    reset();
    console.log('Tournament hosted Successfully: ', response.data)
    
    }catch(err){
      console.error('Error Hosting Tournament: ',err)
    }
    
  };

  const deleteTournament = (id) => {
    setTournaments(tournaments.filter((tournament) => tournament.id !== id));
  };

  return (
    <div className="tournament-page">
      <h1>Host a Tournament</h1>
      <form className="tournament-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Tournament Title"
          {...register('title', { required: true })}
        />
        <input
          type="text"
          placeholder="Category (e.g., FPS, MOBA)"
          {...register('category', { required: true })}
        />
        <input
          type="text"
          placeholder="Event Type (e.g., Online, LAN)"
          {...register('eventType', { required: true })}
        />
        <input
          type="text"
          placeholder="Game"
          {...register('game', { required: true })}
        />
        <input
          type="number"
          placeholder="Entry Cost (INR)"
          {...register('cost', { required: true })}
        />
        <input
          type="text"
          placeholder="Region"
          {...register('region', { required: true })}
        />
        <input
          type="url"
          placeholder="Banner Image URL"
          {...register('banner', { required: true })}
        />
        <input
          type="text"
          placeholder="Contact Info"
          {...register('contact', { required: true })}
        />
        <select {...register('status', { required: true })}>
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
        </select>
        <button className='btn-host' type="submit">Add Tournament</button>
      </form>

      <div className="tournament-list">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="tournament-card">
            <img src={tournament.banner} alt="Tournament Banner" />
            <h2>{tournament.title}</h2>
            <p><strong>Category:</strong> {tournament.category}</p>
            <p><strong>Event Type:</strong> {tournament.eventType}</p>
            <p><strong>Game:</strong> {tournament.game}</p>
            <p><strong>Cost:</strong> ₹{tournament.cost}</p>
            <p><strong>Region:</strong> {tournament.region}</p>
            <p><strong>Contact:</strong> {tournament.contact}</p>
            <p><strong>Status:</strong> {tournament.status}</p>
            <button onClick={() => deleteTournament(tournament.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentForm;
