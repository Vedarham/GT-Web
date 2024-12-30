import React from 'react'
import "./Card.css"
const Card = (props) => {
    // const getImage=(image)=>( './assets/images/'+{image})
  return (
    <>
        <div className='card-cont'>
            <div className='card-img'>
                {/* <img src={getImage(props.image)} alt='#'/> */}
            </div>
            <div className='card-details'>
                <h2>{props.org.name}</h2>
                <span>Recent Event: {props.org.recentEvent.title}</span>
                <span>Events Organized: {props.org.totalEvents}</span>
                {/* <span>{props.status}</span>
                <span>Entry : {props.prize}</span>
                <span>Reward: {props.reward}</span> */}
                <span>Date: {props.org.recentEvent.date}</span>
                <span>Players: {props.org.recentEvent.participants} </span>
                {/* <span>Teams: {props.teams}</span> */}
            </div>
            <button className='join-btn'>
                Join the Tournament
            </button>
        </div>
    </>
  )
}

export default Card