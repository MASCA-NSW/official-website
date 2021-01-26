import React from 'react';

// stylesheets
import './EventCard.css';

export default function EventCard({ eventImage, eventName, eventDate, eventTime, eventVenue }) {
  return (
    <div className="event-card">
      <img src={eventImage} className="event-image"/>
      <h1 className="event-name">{ eventName }</h1>
      <p>{ eventDate }</p>
      <p>{ eventTime }</p>
      <p>{ eventVenue }</p>
      <button className="rsvp-button">RSVP</button>
    </div>
  )
}