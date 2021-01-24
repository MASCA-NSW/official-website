import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './SocmedLinks.css';

export default function SocmedLinks() {
  return (
    <div className="container">
      <h1>Connect with us</h1>
      <div className="socmed-links">
        <div className="fa fa-facebook">
          <h1><FontAwesomeIcon icon={faFacebook} /></h1>
        </div>
        <div className="fa fa-email">
          <h1><FontAwesomeIcon icon={faEnvelope} /></h1>
        </div>
        <div className="fa fa-twitter">
          <h1><FontAwesomeIcon icon={faTwitter} /></h1>
        </div>
        <div className="fa fa-youtube">
          <h1><FontAwesomeIcon icon={faYoutube} /></h1>
        </div>
      </div>
    </div>
  )
}