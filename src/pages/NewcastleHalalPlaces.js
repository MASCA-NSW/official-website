import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './NewcastleHalalPlaces.css';

export default function NewcastleHalalPlaces() {
  return (
    <div>
      <Navbar />
      <div className="newcastle-halal-places-body">
        <h1>Newcastle</h1>
        <p>Crust Gourmet Pizza Bar</p>
        <p>Noodle Hut</p>
        <p>Guzman y Gomez (chicken only)</p>
        <p>Oporto</p>
        <p>Loco Mexico (Beaumont St, Hamilton)</p>
        <p>Raj's Corner (chicken & lamb only)</p>
        <p>Nando's</p>
        <p>Tasteful Creations</p>
      </div>
      <Footer />
    </div>
  )
}