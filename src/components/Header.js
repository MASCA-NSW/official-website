import React from 'react';
import Typewriter from 'typewriter-effect';

// our own components
import Navbar from '../components/Navbar';

// stylesheets
import './Header.css';

export default function Header({ parentClassName }) {
  return (
    <header className={parentClassName}>
      <Navbar />
      <div className="greetings-container">
        <span className="greetings">
          <Typewriter
            options={{
              strings: ['Hello', 'Hai', '你好', 'Vanakkam'],
              autoStart: true,
              loop: true
            }}
          />
        </span>
        <span className="masca-full-name">
          MALAYSIAN STUDENTS'<br/>COUNCIL OF AUSTRALIA
        </span>
        <h3 className="energetic-yellow">
          New South Wales Chapter
        </h3>
      </div>
    </header>
  )
}