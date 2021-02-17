import React from 'react';

// our own components
import AffiliatesSponsorCard from './AffiliateSponsorCard';

// sponsors logo
import gamuda from '../images/sponsors/gamuda.png';
import tfm from '../images/sponsors/tfm-logo.png';
import ema from '../images/sponsors/ema.webp';
import aug from '../images/sponsors/aug-logo.png';
import ria from '../images/sponsors/ria-logo.svg';

// affiliates logo
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

// stylesheets
import './AffiliatesSponsors.css';

export default function AffiliatesSponsors() {
  return (
    <div className="affiliates-sponsors-container">
      <div>
        <h1 style={{"color":"#bd1e2b"}}>Proudly sponsored by</h1>
        <AffiliatesSponsorCard imgSrc={gamuda} redirectsTo="https://gamuda.com.my/" />
        <AffiliatesSponsorCard imgSrc={tfm} redirectsTo="https://teachformalaysia.org/" />
        <AffiliatesSponsorCard imgSrc={ema} redirectsTo="https://www.ema.org.au/" />
        <AffiliatesSponsorCard imgSrc={aug} redirectsTo="https://augstudy.com/australia/" />
        <AffiliatesSponsorCard imgSrc={ria} redirectsTo="https://www.riamoneytransfer.com/au/en" />
      </div>
      <div>
        <h1 style={{"color":"#fdb041"}}>Meet our affiliates</h1>
        <AffiliatesSponsorCard imgSrc={masuow} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={massa} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={mfest} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={mhrc} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={move} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={msamac} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={mso} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={munsa} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={suams} redirectsTo="https://www.mascansw.com/" />
        <AffiliatesSponsorCard imgSrc={ikram} redirectsTo="https://www.mascansw.com/" />
      </div>
      <span className="photo-credit desktop-only">Photo by <a href="https://unsplash.com/@danfreemanphoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dan Freeman</a> on <a href="https://unsplash.com/s/photos/sydney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      <span className="photo-credit mobile-only">Photo by <a href="https://unsplash.com/@kewal?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kewal</a> on <a href="https://unsplash.com/s/photos/sydney?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  )
}