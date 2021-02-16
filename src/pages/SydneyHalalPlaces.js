import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './SydneyHalalPlaces.css';

export default function SydneyHalalPlaces() {
  return (
    <div>
      <Navbar />
      <div className="sydney-halal-places-body">
        <div className="sydney-halal-places">
          <h1>Eastern Suburbs</h1>
          <p>Ayam Goreng 99</p>
          <p>IndoRasa</p>
          <p>Meet Fresh</p>
          <p>Ogalo (selected menu)</p>
          <p>Oliver Brown</p>
          <p>Oporto (chicken only)</p>
          <p>Pondok Buyung</p>
          <p>Rosebery Martabak</p>
          <p>Bakso House</p>
          <p>Sedap Rasa</p>
          <p>Shalom</p>
          <p>Taste of Thai</p>
          <p>Time for Thai</p>
        </div>
        <div className="sydney-halal-places">
          <h1>Newtown</h1>
          <p>BurgerFuel</p>
          <p>Crumble Top</p>
          <p>Guzman y Gomez (chicken only)</p>
          <p>Istanbul on King</p>
          <p>Kammadhenu</p>
          <p>Time for Thai</p>
        </div>
        <div className="sydney-halal-places">
          <h1>Sydney CBD</h1>
          <p>Hot Star Chicken</p>
          <p>Ipoh on York</p>
          <p>Neptune Palace</p>
          <p>Nur Muhammad Cafe</p>
          <p>Jimmy's Recipe</p>
          <p>Rashays</p>
        </div>
        <div className="sydney-halal-places">
          <h1>Broadway</h1>
          <p>Almustafa</p>
          <p>Guzman y Gomez (chicken only)</p>
          <p>Just Fry</p>
          <p>Malacca Straits</p>
          <p>Nandos</p>
          <p>Papparich</p>
          <p>Toros</p>
          <p>Time for Thai</p>
          <p>Sushi Hub (everything but the sauce)</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}