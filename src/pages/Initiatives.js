import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import MemoryLane from '../components/MemoryLane';

// images //
// welfare
import koala1617a from '../images/koala1617a.jpeg';
import commRetreat1819a from '../images/commRetreat1819a.jpg';
import dragonBoating1617b from '../images/dragonBoating1617b.JPG';
import commRetreat1819d from '../images/commRetreat1819d.jpg';
// careers & dev
import thinktank1617g from '../images/thinktank1617g.JPG';
import thinktank1617e from '../images/thinktank1617e.JPG';
import thinktank1617c from '../images/thinktank1617c.JPG';
import thinktank1617a from '../images/thinktank1617a.JPG';
// cultural
import makanmain1819b from '../images/makanmain1819b.JPG';
import commRetreat1819g from '../images/commRetreat1819g.jpg';
import makanmain1819a from '../images/makanmain1819a.png';
import makanmain1819c from '../images/makanmain1819c.JPG';

// sports
import smgBasketball1617a from '../images/smgBasketball1617a.JPG';
import smgBasketball1617e from '../images/smgBasketball1617e.JPG';
import smgFutsal1617a from '../images/smgFutsal1617a.JPG';
import smg1617b from '../images/smg1617b.JPG';
// officers
// student discounts

// stylesheets
import './Initiatives.css';

export default function Initiatives() {
  return (
    <div>
      <Navbar parentClassName="initiatives-header" />
      <div className="alert">
        <Alert message={<h1>We will update our initiatives soon.<br/>Tune in to <u><a href="https://www.facebook.com/mascansw">our Facebook page</a></u> to get the latest updates!</h1>} />
        <h3>Below are some initiatives from past years:</h3>
      </div>
      <h1>Check out our initiatives!</h1>
      <div className="links">
        <MemoryLane
          pic1={koala1617a}
          pic2={commRetreat1819a}
          pic3={dragonBoating1617b}
          pic4={commRetreat1819d}
        />
        <button className="initiatives-links"><b>Welfare</b></button>
        <MemoryLane
          pic1={thinktank1617g}
          pic2={thinktank1617e}
          pic3={thinktank1617a}
          pic4={thinktank1617c}
        />
        <button className="initiatives-links"><b>Careers & Development</b></button>
        <MemoryLane
          pic1={makanmain1819b}
          pic2={commRetreat1819g}
          pic3={makanmain1819a}
          pic4={makanmain1819c}
        />
        <button className="initiatives-links"><b>Cultural</b></button>
        <MemoryLane
          pic1={smgBasketball1617a}
          pic2={smg1617b}
          pic3={smgFutsal1617a}
          pic4={smgBasketball1617e}
        />
        <button className="initiatives-links"><b>Sports</b></button>
        <button className="initiatives-links"><b>Officers Program</b></button>
        <button className="initiatives-links"><b>Student Discounts</b></button>
      </div>
      <Footer />
    </div>
  )
}