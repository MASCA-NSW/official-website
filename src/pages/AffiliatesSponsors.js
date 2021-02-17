import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// affiliates logos
import masuow from '../images/affiliates/mas-uow.webp';
import massa from '../images/affiliates/massa-uts.webp';
import mfest from '../images/affiliates/mfest.webp';
import mhrc from '../images/affiliates/mhrc.webp';
import move from '../images/affiliates/move.webp';
import msamac from '../images/affiliates/msa-macquarie.webp';
import mso from '../images/affiliates/mso-unsw.webp';
import munsa from '../images/affiliates/munsa.webp';
import suams from '../images/affiliates/suams-usyd.webp';
import ikram from '../images/affiliates/ikram.png';

// sponsors logo
import gamuda from '../images/sponsors/gamuda.png';
import tfm from '../images/sponsors/tfm-logo.png';
import ema from '../images/sponsors/ema.webp';
import aug from '../images/sponsors/aug-logo.png';
import ria from '../images/sponsors/ria-logo.svg';

// stylesheets
import './AffiliatesSponsors.css';

function AffiliatesCard({src, orgName, orgFullName, websiteUrl, emailAddress, facebookUrl, instagramUrl}) {
  return (
    <div className="affiliates-sponsors-card">
      <div className="as-img-container">
        <img src={src} />
      </div>
      <div className="as-details-container">
        <h1>{orgName}</h1>
        <h3>{orgFullName}</h3>
        {/* <p>Website: <a href={websiteUrl}>{websiteUrl}</a></p> */}
        <p>Email: {emailAddress}</p>
        <p>Social: <a href={facebookUrl}>Facebook</a> | <a href={instagramUrl}>Instagram</a></p>
      </div>
    </div>
  )
}

function SponsorsCard({src, orgFullName, websiteUrl}) {
  return (
    <div className="affiliates-sponsors-card">
      <div className="as-img-container">
        <img src={src} />
      </div>
      <div className="as-details-container">
        <h3>{orgFullName}</h3>
        <button onClick={() => {
          window.location.href = websiteUrl;
        }}>Visit website</button>
      </div>
    </div>
  )
}

export default function AffiliatesSponsors() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Meet our affiliates</h1>
        <div className="as-cards-container">
          <AffiliatesCard
            src={mso}
            orgName="MSO UNSW"
            orgFullName="Malaysian Student Organisation of the University of New South Wales"
            websiteUrl="https://www.unswmso.org"
            emailAddress="info@unswmso.org"
            facebookUrl="https://www.facebook.com/MSOUNSW/"
            instagramUrl="https://www.instagram.com/unswmso/"
          />
          <AffiliatesCard
            src={suams}
            orgName="SUAMS USYD"
            orgFullName="Sydney University Association of Malaysian Students"
            websiteUrl="https://www.usydsuams.com"
            emailAddress="usydsuams@gmail.com"
            facebookUrl="https://www.facebook.com/suams.usyd"
            instagramUrl="https://www.instagram.com/usydsuams/"
          />
          <AffiliatesCard
            src={massa}
            orgName="MASSA UTS"
            orgFullName="Malaysian And Singaporean Student Association of the University of Technology Sydney"
            websiteUrl="https://activateuts.com.au/clubs/malaysian-and-singaporean-students-association-massa"
            emailAddress="president@massa.activateuts.com.au"
            facebookUrl="https://www.facebook.com/UTSMASSA/"
            instagramUrl="https://www.instagram.com/utsmassa/"
          />
          <AffiliatesCard
            src={masuow}
            orgName="MAS UOW"
            orgFullName="Malaysian Association for Students of the University of Wollongong"
            websiteUrl=""
            emailAddress="malaysiauow@gmail.com"
            facebookUrl="https://www.facebook.com/malaysiauow/"
            instagramUrl="https://www.instagram.com/mas_uow/"
          />
          <AffiliatesCard
            src={msamac}
            orgName="MSA MQU"
            orgFullName="Malaysian Students Association of Macquarie University"
            websiteUrl="https://msamacquarie.wixsite.com/home"
            emailAddress="enquiries.msa@gmail.com"
            facebookUrl="https://www.facebook.com/MacquarieMSA/"
            instagramUrl="https://www.instagram.com/msa_mq/"
          />
          <AffiliatesCard
            src={munsa}
            orgName="MUNSA UON"
            orgFullName="Malaysian University of Newcastle Student Association"
            websiteUrl=""
            emailAddress="uonmunsa@gmail.com"
            facebookUrl="https://www.facebook.com/malaysiansofuon/"
            instagramUrl="https://www.instagram.com/munsa_uon/"
          />
          <AffiliatesCard
            src={mfest}
            orgName="MFEST"
            orgFullName="Malaysia Festival"
            websiteUrl="https://www.malaysiafest.com.au/"
            emailAddress="info@malaysiafest.com.au"
            facebookUrl="https://www.facebook.com/malaysiafest"
            instagramUrl="https://www.instagram.com/malaysiafest/"
          />
          <AffiliatesCard
            src={move}
            orgName="MOVE"
            orgFullName="Malaysian Organisation of Volunteers"
            websiteUrl="https://www.movensw.org/"
            emailAddress="siddiq@movensw.org"
            facebookUrl="https://www.facebook.com/move.nsw/"
            instagramUrl="https://www.instagram.com/move_sydney/"
          />
          <AffiliatesCard
            src={mhrc}
            orgName="MHRC"
            orgFullName="Malaysian Hall Residents Club"
            websiteUrl="https://www.ema.org.au/mh-sydney"
            emailAddress="mhrc.syd@gmail.com"
            facebookUrl="https://www.facebook.com/mhrcsydney/"
            instagramUrl="https://www.instagram.com/mhrcsydney/"
          />
          <AffiliatesCard
            src={ikram}
            orgName="IKRAM OZ"
            orgFullName="IKRAM Australia"
            websiteUrl="https://ikramoz.wordpress.com/"
            emailAddress="ikramaustralia.oz@gmail.com"
            facebookUrl="https://www.facebook.com/IKRAMAustralia"
            instagramUrl="https://www.instagram.com/ikramoz/"
          />
        </div>
      </div>
      <div>
        <h1>Meet our sponsors</h1>
        <div className="as-cards-container">
          <SponsorsCard
            src={gamuda}
            orgFullName="GAMUDA Berhad"
            websiteUrl="https://gamuda.com.my/"
          />
          <SponsorsCard
            src={ema}
            orgFullName="Education Malaysia Australia"
            websiteUrl="https://www.ema.org.au/"
          />
          <SponsorsCard
            src={tfm}
            orgFullName="Teach for Malaysia"
            websiteUrl="https://teachformalaysia.org/"
          />
          <SponsorsCard
            src={aug}
            orgFullName="AUG"
            websiteUrl="https://augstudy.com/australia/"
          />
          <SponsorsCard
            src={ria}
            orgFullName="Ria Financial Services"
            websiteUrl="https://www.riamoneytransfer.com/au/en"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}