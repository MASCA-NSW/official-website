import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import EventCard from '../components/EventCard';

// images
import agm from '../images/agm1920a.png';
import thinktank from '../images/thinktank1617d.JPG';

// stylesheets
import './Events.css';

export default function Events() {
  return (
    <div>
      <Navbar parentClassName="events-header"/>
      <div className="alert">
        <Alert message={<h1>We will update our events soon.<br/>Tune in to <u><a href="https://www.facebook.com/mascansw">our Facebook page</a></u> to get the latest updates!</h1>} />
        <h3>Below are some events from past years:</h3>
      </div>
      <div className="events-body">
        <EventCard
          eventImage={agm}
          eventName="Annual General Meeting MASCA NSW"
          eventDate="Saturday, 31th October 2020"
          eventTime="10:00 am – 6:00 pm"
          eventVenue="Online - Zoom"
          className="event-cards"
        />
        <EventCard
          eventImage={thinktank}
          eventName="Think Tank"
          eventDate="Sunday, 6th October 2019"
          eventTime="10:00 am – 4:00 pm"
          eventVenue="University of Technology Sydney, 15 Broadway, Ultimo NSW 2007, Australia"
          className="event-cards"
        />
        <EventCard
          eventImage={thinktank}
          eventName="Think Tank"
          eventDate="Sunday, 6th October 2019"
          eventTime="10:00 am – 4:00 pm"
          eventVenue="University of Technology Sydney, 15 Broadway, Ultimo NSW 2007, Australia"
          className="event-cards"
        />
      </div>
      <Footer />
    </div>
  )
}