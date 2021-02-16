import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './CariMakan.css';
import { Link } from 'react-router-dom';

export default function CariMakan() {
  return (
    <div>
      <Navbar />
      <div className="cari-makan-title">
        <h1>Sydney Cari Makan Guide</h1>
        <h3>All the halal places in NSW.</h3>
      </div>
      <div className="cari-makan-body">
        <div id="sydney" className="halal-places">
          <Link to="/cari-makan/sydney" className="links-to-halal-places">Sydney</Link>
          <span className="photo-credit">Photo by <a href="https://unsplash.com/@danfreemanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dan Freeman</a> on <a href="https://unsplash.com/s/photos/sydney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
        <div id="wollongong" className="halal-places">
          <Link to="/cari-makan/wollongong" className="links-to-halal-places">Wollongong</Link>
          <span className="photo-credit">Photo by <a href="https://unsplash.com/@bigsole?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Caleb Semeri</a> on <a href="https://unsplash.com/s/photos/wollongong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
        <div id="newcastle" className="halal-places">
          <Link to="/cari-makan/newcastle" className="links-to-halal-places">Newcastle</Link>
          <span className="photo-credit">Photo by <a href="https://unsplash.com/@chelseap98?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chelsea Pridham</a> on <a href="https://unsplash.com/s/photos/newcastle-nsw?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>
      </div>
      <Footer />
    </div>
  )
}