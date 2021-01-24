import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/MASCANSW-logo.png';

export default function About() {
  return (
    <div>
      <header className="about-header">
        <h1><Link to="/"><img src={logo} className="logo" alt="Official MASCA NSW Logo" /></Link></h1>
        <h1 className="greetings mobile-only">
          <Typewriter
            options={{
              strings: ['Hello', 'Hai', '你好', 'Vanakkam'],
              autoStart: true,
              loop: true
            }}
          />
        </h1>
        <h1><button><FontAwesomeIcon icon={faBars} /></button></h1>
      </header>
      <h1>About</h1>
    </div>
  )
}