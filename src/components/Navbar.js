import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMoon,
  faTimes,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';

import logo from '../images/MASCANSW-logo.png';

import './Navbar.css';

export default function Navbar({ parentClassName }) {
  return (
    <header className={parentClassName}>
      <h1 className="mobile-only">
        <img src={logo} className="logo" alt="Official MASCA NSW Logo" />
      </h1>
      <div className="navbar desktop-only">
        <Link to="/">
          <img src={logo} className="logo" alt="Official MASCA NSW Logo" />
        </Link>
        <div className="dropdown">
          <Link to="/about">
            <p>About</p>
          </Link>
          <div className="dropdown-content">
            <Link to="/past-council">
              <p>Past Council</p>
            </Link>
          </div>
        </div>
        <Link to="/events">
          <p>Events</p>
        </Link>
        <div className="dropdown">
          <Link to="/initiatives">
            <p>Initiatives</p>
          </Link>
          <div className="dropdown-content">
            <Link to="/welfare-initiatives"><p>Student Welfare</p></Link>
            <Link to="/careers-initiatives"><p>Careers & Development</p></Link>
            <Link to="/cultural-initiatives"><p>Cultural</p></Link>
            <Link to="/sports-initiatives"><p>Sports</p></Link>
            <Link to="/officers-program"><p>Officers Program</p></Link>
            <Link to="/student-discounts"><p>Student Discounts</p></Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="student-guide"><p>Student Guide</p></Link>
          <div className="dropdown-content">
            <Link to="/starter-kit"><p>Australia Starter Kit</p></Link>
            <Link to="/jalan-jalan"><p>Jalan-Jalan</p></Link>
            <Link to="/cari-makan"><p>Cari Makan</p></Link>
          </div>
        </div>
        <Link to="/affiliates-sponsors"><p>Affiliates & Sponsors</p></Link>
        <button className="dark-mode-button"><FontAwesomeIcon icon={faMoon}/></button>
      </div>
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
      <h1 className="mobile-only">
        <button onClick={() => {
          document.getElementById("mobile-navbar-content").classList.add("show");
        }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </h1>
      <div id="mobile-navbar-content" className="mobile-only">
        <h1 className="close-mobile-navbar">
          <button className="dark-blue" onClick={() => {
            document.getElementById("mobile-navbar-content").classList.remove("show");
          }}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </h1>
        <Collapsible
          trigger={
            <p>
              About <FontAwesomeIcon icon={faSortDown} className="margined-bottom" />
            </p>
          }
        >
          <Link to="/about">
            <p>Current Council</p>
          </Link>
          <Link to="/past-council">
            <p>Past Council</p>
          </Link>
        </Collapsible>
        <Link to="/events">
          <p>Events</p>
        </Link>
        <Collapsible
          trigger={
            <p>
              Initiatives <FontAwesomeIcon icon={faSortDown} className="margined-bottom" />
            </p>
          }
        >
          <Link to="/initiatives">
            <p>All Initiatives</p>
          </Link>
          <Link to="/welfare-initiatives">
            <p>Student Welfare</p>
          </Link>
          <Link to="/careers-initiatives">
            <p>Careers & Development</p>
          </Link>
          <Link to="/cultural-initiatives">
            <p>Cultural</p>
          </Link>
          <Link to="/sports-initiatives">
            <p>Sports</p>
          </Link>
          <Link to="/officers-program">
            <p>Officers Program</p>
          </Link>
          <Link to="/student-discounts">
            <p>Student Discounts</p>
          </Link>
        </Collapsible>
        <Collapsible
          trigger={
            <p>
              Student Guide <FontAwesomeIcon icon={faSortDown} className="margined-bottom" /> 
            </p>
          }
        >
          <Link to="/student-guide">
            <p>All Guides</p>
          </Link>
          <Link to="/starter-kit">
            <p>Australia Starter Kit</p>
          </Link>
          <Link to="/jalan-jalan">
            <p>Jalan-Jalan</p>
          </Link>
          <Link to="/cari-makan">
            <p>Cari Makan</p>
          </Link>
        </Collapsible>
        <Link to="/affiliates-sponsors">
          <p>Affiliates and Sponsors</p>
        </Link>
        <p><button className="dark-mode-button"><FontAwesomeIcon icon={faMoon}/></button></p>
      </div>
    </header>
  )
}