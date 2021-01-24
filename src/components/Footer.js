import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faHeart,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer-content">
        <div>
          <h3 className="blood-red"><FontAwesomeIcon icon={faMapMarkerAlt} /> Headquarters</h3>
          <span className="hq">2A Alison Rd<br />Randwick, 2031<br />Australia</span>
        </div>
        <div>
          <h3 className="energetic-yellow"><FontAwesomeIcon icon={faEnvelope} /> Contact Email</h3>
          <span className="contact-email">admin@nsw.masca.org.au</span>
        </div>
      </div>
      <div className="bottom-footer-content">
        <p>MASCA NSW 20/21 <FontAwesomeIcon icon={faCopyright} /></p>
        <p>Made with <FontAwesomeIcon icon={faHeart}/> using React</p>
      </div>
    </footer>
  )
}