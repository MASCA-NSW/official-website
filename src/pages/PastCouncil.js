import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import PastCouncilYear from '../components/PastCouncilYear';
import Footer from '../components/Footer';

// images
import photoshoot1819a from '../images/photoshoot1819a.jpg';
import photoshoot1718a from '../images/photoshoot1718a.jpg';
import photoshoot1617a from '../images/photoshoot1617a.webp';
import photoshoot1516a from '../images/photoshoot1516a.webp';
import photoshoot1415a from '../images/photoshoot1415a.webp';
import photoshoot1314a from '../images/photoshoot1314a.webp';
import photoshoot1213a from '../images/photoshoot1213a.webp';

// data
import PastCouncilMembers1819 from '../data/PastCouncilMembers1819';
import PastCouncilMembers1718 from '../data/PastCouncilMembers1718';
import PastCouncilMembers1617 from '../data/PastCouncilMembers1617';
import PastCouncilMembers1516 from '../data/PastCouncilMembers1516';
import PastCouncilMembers1415 from '../data/PastCouncilMembers1415';
import PastCouncilMembers1314 from '../data/PastCouncilMembers1314';
import PastCouncilMembers1213 from '../data/PastCouncilMembers1213';

import './PastCouncil.css';

export default function PastCouncil() {
  return (
    <div>
      <Navbar parentClassName="past-council-header" />
      <PastCouncilYear
        parentClassName="past-council-1819"
        whichCouncil={PastCouncilMembers1819}
        councilPicture={photoshoot1819a}
      />
      <PastCouncilYear
        parentClassName="past-council-1819"
        whichCouncil={PastCouncilMembers1819}
        councilPicture={photoshoot1819a}
      />
      <PastCouncilYear
        parentClassName="past-council-1718"
        whichCouncil={PastCouncilMembers1718}
        councilPicture={photoshoot1718a}
      />
      <PastCouncilYear
        parentClassName="past-council-1617"
        whichCouncil={PastCouncilMembers1617}
        councilPicture={photoshoot1617a}
      />
      <PastCouncilYear
        parentClassName="past-council-1516"
        whichCouncil={PastCouncilMembers1516}
        councilPicture={photoshoot1516a}
      />
      <PastCouncilYear
        parentClassName="past-council-1415"
        whichCouncil={PastCouncilMembers1415}
        councilPicture={photoshoot1415a}
      />
      <PastCouncilYear
        parentClassName="past-council-1314"
        whichCouncil={PastCouncilMembers1314}
        councilPicture={photoshoot1314a}
      />
      <PastCouncilYear
        parentClassName="past-council-1213"
        whichCouncil={PastCouncilMembers1213}
        councilPicture={photoshoot1213a}
      />
      <Footer />
    </div>
  )
}