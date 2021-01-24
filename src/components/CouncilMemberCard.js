import React from 'react';

import './CouncilMemberCard.css';

export default function CouncilMemberCard({ src, alt, portfolio, name, course, uni }) {
  return (
    <div className="council-member-card">
      <div className="council-member-pic">
        <img src={src} alt={alt} />
      </div>
      <h3>{ portfolio }</h3>
      <p>
        <b>
          { name }
        </b>
        <br/>
        { course }
        <br/>
        { uni }
      </p>
    </div>
  )
}