import React from 'react';

export default function AffiliatesSponsorCard({ imgSrc, redirectsTo }) {
  return (
    <a href={redirectsTo} className="affiliate-sponsor-card">
      <img src={imgSrc}  alt="Official Affiliate Logo"/>
    </a>
  )
}