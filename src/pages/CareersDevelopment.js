import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './CareersDevelopment.css';

export default function CareersDevelopment() {
  return (
    <div>
      <Navbar parentClassName="careers-development-header" />
      <div className="careers-development-body">
      <h1>Stay tune to <u><a href="https://www.facebook.com/mascansw">our Facebook page</a></u> to get the latest updates!</h1>
      </div>
      <Footer />
    </div>
  )
}