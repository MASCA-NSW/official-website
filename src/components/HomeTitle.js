import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-typewriting-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-typewriting-effect/dist/index.css';

export default function HomeTitle({ string, delay, redirectsTo, linkId, callToAction, titleColor, icon }) {
  return (
    <div className="home-titles">
      <h1 className={titleColor}><FontAwesomeIcon icon={icon} /></h1>
      <h1>
        <Typewriter
          string={string}
          delay={delay}
          className={titleColor}
          stopBlinkinOnComplete
          onComplete={() => {
            document.getElementById(linkId).classList.add("show");
          }}
        />
      </h1>
      <div id={linkId}>
        <b>
        <Link to={redirectsTo}>
          { callToAction }
        </Link>
        </b>
      </div>
    </div>
  )
}