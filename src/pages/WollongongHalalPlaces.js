import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './WollongongHalalPlaces.css';

export default function WollongongHalalPlaces() {
  return (
    <div>
      <Navbar />
      <div className="wollongong-halal-places-body">
        <h1>Wollongong</h1>
        <p>Casablance</p>
        <p>Hot Chilli</p>
        <p>Rashay's Steak</p>
        <p>Chicko's</p>
        <p>Tony Chicken Shop</p>
        <p>KCC Fried Chicken</p>
        <p>Souva King</p>
        <p>Delish Bar</p>
        <p>Litani's</p>
      </div>
      <Footer />
    </div>
  )
}