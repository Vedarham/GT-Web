import React from 'react'
import Card from '../../components/Card/Card.js'
import "./OrganizerPage.style.css"
const OrganizerPage = () => {

    const organizer = [
        {
            id: 1,
            name: "John Doe",
            totalEvents: 15,
            recentEvent: {
              title: "Valorant Pro League",
              date: "20th December 2024",
              participants: 50,
              description: "An exciting tournament featuring top Valorant teams.",
            },
          },
          {
            id: 2,
            name: "Jane Smith",
            totalEvents: 10,
            recentEvent: {
              title: "CS:GO Championships",
              date: "15th November 2024",
              participants: 40,
              description: "A thrilling CS:GO tournament with intense action.",
            },
          },
          {
            id: 3,
            name: "David Brown",
            totalEvents: 20,
            recentEvent: {
              title: "Rocket League Showdown",
              date: "25th October 2024",
              participants: 30,
              description: "A high-energy tournament showcasing Rocket League pros.",
            },
          },
          {
            id: 4,
            name: "Emily White",
            totalEvents: 12,
            recentEvent: {
              title: "Apex Legends Clash",
              date: "10th December 2024",
              participants: 45,
              description: "An epic battle royale event with top Apex players.",
            },
          },
          {
            id: 5,
            name: "Sophia Black",
            totalEvents: 8,
            recentEvent: {
              title: "PUBG Invitational",
              date: "18th November 2024",
              participants: 55,
              description: "A PUBG tournament featuring squads from around the world.",
            },
          },
          {
            id: 6,
            name: "Michael Green",
            totalEvents: 22,
            recentEvent: {
              title: "FIFA Online Cup",
              date: "5th December 2024",
              participants: 25,
              description: "A FIFA tournament with nail-biting matches.",
            },
          },
    ]

  return (
  <>
  <div className='org-cont'>
        {organizer.map((org, index) => (
          <Card key={index} org={org} />
        ))}
  </div>
    
  </>
  )
}

export default OrganizerPage