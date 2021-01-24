import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faMapMarkerAlt,
  faEnvelope,
  faWaveSquare,
  faGraduationCap,
  faDove,
  faHandshake,
  faHeart,
  faCopyright,
  faMoon,
  faTimes,
  faSortDown
} from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import Collapsible from 'react-collapsible';

// our own components
import logo from '../images/MASCANSW-logo.png';
import HomeTitle from '../components/HomeTitle';
import MemoryLane from '../components/MemoryLane';
import AffiliatesSponsors from '../components/AffiliatesSponsors';
import SocmedLinks from '../components/SocmedLinks';

// images
// import commRetreat1819b from '../images/commRetreat1819b.jpg';
import commRetreat1819h from '../images/commRetreat1819h.jpg';
import mng1819a from '../images/mng1819a.JPG';
// import agm1819a from '../images/agm1819a.JPG';
// import agm1819b from '../images/agm1819b.JPG';
import agm1819c from '../images/agm1819c.JPG';
import smg1718c from '../images/smg1718c.JPG';
// import smgBadminton1617a from '../images/smgBadminton1617a.JPG';
import smgCaptainball1617a from '../images/smgCaptainball1617a.JPG';
import thinktank1617h from '../images/thinktank1617h.JPG';
import koala1617b from '../images/koala1617b.jpeg';
import ccc1819b from '../images/ccc1819b.JPG';
import ccc1819e from '../images/ccc1819e.JPG';
import ccu1718b from '../images/ccu1718b.JPG';
import dragonBoating1617c from '../images/dragonBoating1617c.JPG';
import gamudaCalendarClub1819 from '../images/GamudaCalendarClub1819.JPG';

// stylesheets
import './Home.css';

export default function Home() {
  return (
    <div>
      <header className="home-header">
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
      <HomeTitle
        string='We are charting the way for Malaysians Down Under'
        delay={50}
        redirectsTo='/about'
        linkId='about-link'
        callToAction='Learn How'
        titleColor='dark-blue'
        icon={faWaveSquare}
      />
      <MemoryLane
        pic1={thinktank1617h}
        pic2={commRetreat1819h}
        pic3={gamudaCalendarClub1819}
        pic4={dragonBoating1617c}
      />
      <HomeTitle
        string='We seek to represent the interests of Malaysian students in Australia'
        delay={80}
        redirectsTo='/events'
        linkId='events-link'
        callToAction='Discover Our Events'
        titleColor='blood-red'
        icon={faGraduationCap}
      />
      <MemoryLane 
        pic1={smgCaptainball1617a}
        pic2={agm1819c}
        pic3={ccc1819e}
        pic4={smg1718c}
      />
      <HomeTitle
        string='We strive to ensure the welfare of the Malaysian students in Australia'
        delay={80}
        redirectsTo='/initiatives'
        linkId='initiatives-link'
        callToAction='Learn About Our Initiatives'
        titleColor='energetic-yellow'
        icon={faDove}
      />
      <MemoryLane 
        pic1={koala1617b}
        pic2={ccu1718b}
        pic3={ccc1819b}
        pic4={mng1819a}
      />
      <HomeTitle
        string='Meet our sponsors & affiliates'
        delay={80}
        redirectsTo='/affiliates-sponsors'
        linkId='afsp-link'
        callToAction='Learn More About Them'
        titleColor='dark-blue'
        icon={faHandshake}
      />
      <AffiliatesSponsors />
      <SocmedLinks />
      <footer className="home-footer">
        <div className="top-home-footer-content">
          <div>
            <h3 className="blood-red"><FontAwesomeIcon icon={faMapMarkerAlt} /> Headquarters</h3>
            <span className="hq">2A Alison Rd<br />Randwick, 2031<br />Australia</span>
          </div>
          <div>
            <h3 className="energetic-yellow"><FontAwesomeIcon icon={faEnvelope} /> Contact Email</h3>
            <span className="contact-email">admin@nsw.masca.org.au</span>
          </div>
        </div>
        <div className="bottom-home-footer-content">
          <p>MASCA NSW 20/21 <FontAwesomeIcon icon={faCopyright} /></p>
          <p>Made with <FontAwesomeIcon icon={faHeart}/> using React</p>
        </div>
      </footer>
    </div>
  )
}