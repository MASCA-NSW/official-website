import React from 'react';

// our own components
import Header from '../components/Header';
import Footer from '../components/Footer';

// images
import core from '../images/logo/core-logo.png';

// stylesheets
import './OfficersProgram.css';

export default function OfficersProgram() {
  return (
    <div>
      <Header parentClassName="officers-program-header" />
      <div className="officers-program-body">
        <img src={core} className="officers-program-logos" />
        <h1 className="dark-blue">Council Officers Recruitment (CORE) Program</h1>
        <p>Since 2014, MASCA NSW has been recruiting talented individuals to assist the council members in organising MASCA NSW's various events and initiatives, as well as help to build all-rounded leaders along the way.</p>
        <p>Council Officers Recruitment is now open again with 11 spots up for grabs! Read below on how you can become MASCA NSW's vital support system, at the core of the organisation.
        </p>
        <div className="officers-program-info">
          <h3>What to expect in MASCA NSW?</h3>
          <ol>
            <li>
              Officers are attached to specific portfolios but can also contribute and learn in others.
            </li>
            <li>Meetings or meet ups happen almost every week.</li>
            <li>Be involved in organising several of our events and projects.</li>
            <li>Regularly join in on events by other organisations.</li>
            <li>Have lots of fun and make cool new friends (us).</li>
          </ol>
          <h3>Requirements to be an officer</h3>
          <ol>
            <li>
              Currently enrolled in a recognised institution of tertiary education in New South Wales.
            </li>
            <li>Passionate about serving fellow Malaysian students.</li>
            <li>Keen to learn and help out.</li>
          </ol>
          <h3>Benefits of joining this programme</h3>
          <ol>
            <li>
              Feel good about helping others and making this world a better place.
            </li>
            <li>Develop leadership and practical soft/technical skills for your future.</li>
            <li>Be cool like us.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  )
}