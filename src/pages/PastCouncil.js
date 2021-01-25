import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import PastCouncilYear from '../components/PastCouncilYear';
import Footer from '../components/Footer';

// images
import photoshoot1920a from '../images/photoshoot1920a.Jpeg';
import photoshoot1819a from '../images/photoshoot1819a.jpg';
import photoshoot1718a from '../images/photoshoot1718a.jpg';
import photoshoot1617a from '../images/photoshoot1617a.webp';
import photoshoot1516a from '../images/photoshoot1516a.webp';
import photoshoot1415a from '../images/photoshoot1415a.webp';
import photoshoot1314a from '../images/photoshoot1314a.webp';
import photoshoot1213a from '../images/photoshoot1213a.webp';

// data
import PastCouncilMembers1920 from '../data/PastCouncilMembers1920';
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
        parentClassName="past-council-1920"
        whichYear="2019/2020"
        councilPicture={photoshoot1920a}
        whichCouncil={PastCouncilMembers1920}
      />
      <PastCouncilYear
        parentClassName="past-council-1819"
        whichYear="2018/2019"
        councilPicture={photoshoot1819a}
        whichCouncil={PastCouncilMembers1819}
      />
      <PastCouncilYear
        parentClassName="past-council-1718"
        whichYear="2017/2018"
        councilPicture={photoshoot1718a}
        whichCouncil={PastCouncilMembers1718}
      />
      <PastCouncilYear
        parentClassName="past-council-1617"
        whichYear="2016/2017"
        councilPicture={photoshoot1617a}
        whichCouncil={PastCouncilMembers1617}
      />
      <PastCouncilYear
        parentClassName="past-council-1516"
        whichYear="2015/2016"
        councilPicture={photoshoot1516a}
        whichCouncil={PastCouncilMembers1516}
      />
      <PastCouncilYear
        parentClassName="past-council-1415"
        whichYear="2014/2015"
        councilPicture={photoshoot1415a}
        whichCouncil={PastCouncilMembers1415}
      />
      <PastCouncilYear
        parentClassName="past-council-1314"
        whichYear="2013/2014"
        councilPicture={photoshoot1314a}
        whichCouncil={PastCouncilMembers1314}
      />
      <PastCouncilYear
        parentClassName="past-council-1213"
        whichYear="2012/2013"
        councilPicture={photoshoot1213a}
        whichCouncil={PastCouncilMembers1213}
      />
      <Footer />
    </div>
  )
}