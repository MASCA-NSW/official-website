import React from 'react';

// our own components
import Header from '../components/Header';
import Footer from '../components/Footer';

// images
import smg from '../images/logo/smg-logo.png';
import teamnsw from '../images/logo/team-nsw.png';

// stylesheets
import './SportsInitiatives.css';

export default function SportsInitiatives() {
  return (
    <div>
      <Header parentClassName="sports-initiatives-header" />
      <div className="sports-initiatives-body">
        <h1>Sports & Activities</h1>
        <p>A active lifestyle leads a healthy life. In MASCA, we believe in the importance of maintaining a healthy and active lifestyle while developing a sense of community and camaraderie among fellow Malaysian students. Through our sports and activities initiatives, we hope to achieve this aim with a good sense of sportsmanship.</p>
        <div className="sports-initiatives">
          <div className="smg">
            <img src={smg} className="sports-initiatives-logos"/>
            <p>The Sydney Malaysian Games (SMG) is an inter-varsity sporting competition between the Malaysian student communities from each participating university within the state of New South Wales (NSW). Held annually, SMG is a flagship collaborative event that aims to bring about the spirit of competition, cooperation, sportsmanship and activeness.</p>
          </div>
          <div className="team-nsw">
            {/* <h1>Kopi Talk</h1> */}
            <img src={teamnsw} className="sports-initiatives-logos" />
            <p>NSW Athletes is an initiative that gathers all Malaysian athletes in the state of New South Wales (NSW) for the Malaysian Summit of Australia Games (MASA Games), formerly known as the National Conference and Games (NCG).  It provides a platform to keep all NSW Malaysian student athletes updated with the latest information on MASA and to provide necessary support for all athletes, in their hunt for gold and championship.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}