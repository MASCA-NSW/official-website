import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// images 
import jbp from '../images/JBP-2019.webp';

// stylesheets
import './StudentDiscounts.css';

export default function StudentDiscounts() {
  return (
    <div>
      <Navbar parentClassName="sd-header" />
      <div className="sd-body">
        <h1>NSW Malaysian Students' Joint Benefits and Privileges</h1>
        <p>The NSW Malaysian Students Joint Benefits and Privileges (JBP) is a collaboration initiated by MASCA NSW with the main objective of gathering value-for-money deals for our students while helping our partners gain more exposure to the Malaysian student community. The participating student organisations include SUAMS USyd, MSO UNSW, MASSA UTS, MSA Macquarie, and MAS UOW.</p>
        <img src={jbp} className="sd-image" />
      </div>
      <Footer />
    </div>
  )
}