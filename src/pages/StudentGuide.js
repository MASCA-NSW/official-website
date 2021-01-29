import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './StudentGuide.css';

export default function StudentGuide() {
  return (
    <div>
      <Navbar parentClassName="student-guide-header" />
      <div className="student-guide-body">
        <h1>Student Guide</h1>
        <div className="student-guide-info">
          <div className="starter-kit">
            <h1>Starter Kit</h1>
            <p>First time settling-in in New South Wales and not sure <b>where to begin?</b> Upon arrival we recommend registering at your university to obtain a Student ID, followed by setting up a bank account at a branch close to the university, then get yourself a mobile phone plan and start inspecting for houses and filling in rental application form.</p>
            <button>Discover More</button>
          </div>
          <div className="jalan-jalan">
            <h1>Jalan-Jalan</h1>
            <p>Tired of hiding in that cave you call your bedroom? Have you finally decided on leaving your house to go somewhere that isn’t uni or the grocery store, yet you find yourself puzzled on <b>where to go?</b> In a bustling city with so much to offer, it can be very overwhelming deciding where to visit first. Try out our Sydney Jalan-jalan Guide made by students for students to get you started on your conquest to explore this beautiful city.</p>
            <button>Discover More</button>
          </div>
          <div className="cari-makan">
            <h1>Cari Makan</h1>
            <p>After all those sightseeing and amazing new sceneries, why don't you grab something to fill up those empty stomachs. Uh-oh. Don't know where to search for any <b>delicious and mouth-watering halal foods</b> in the area where you're staying? Have no worries for this Cari Makan Guide that we've prepared all of the locations for halal food shops in Sydney, Wollongong and Newcastle.</p>
            <button>Discover More</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}