import React from 'react';
import {
  faWaveSquare,
  faGraduationCap,
  faDove,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

// our own components
import Header from '../components/Header';
import HomeTitle from '../components/HomeTitle';
import MemoryLane from '../components/MemoryLane';
import AffiliatesSponsors from '../components/AffiliatesSponsors';
import SocmedLinks from '../components/SocmedLinks';
import Footer from '../components/Footer';

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
      <Header parentClassName="home-header" />
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
      <Footer />
    </div>
  )
}