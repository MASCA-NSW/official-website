import React from 'react';

import './PastCouncilMember.css';

export default function PastCouncilMember({ portfolio, name }) {
  return (
    <div className="past-council-member-card">
      <p><b>{ portfolio }</b><br/>{ name }</p>
    </div>
  )
}