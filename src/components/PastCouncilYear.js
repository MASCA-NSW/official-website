import React from 'react';

// our own components
import PastCouncilMember from '../components/PastCouncilMember';

// stylesheets
import './PastCouncilYear.css'

const currentYear = new Date().getFullYear();

export default function PastCouncilYear({ parentClassName, whichCouncil, councilPicture }) {
  return (
    <div className={parentClassName}>
      <div className={`${parentClassName}-content`}>
        <h2>The Council {currentYear - 3}/{currentYear - 2}</h2>
        <img src={councilPicture} className="past-council-pics mobile-only" />
        {
          whichCouncil.map((member) => {
            return (
              <PastCouncilMember portfolio={member.portfolio} name={member.name} />
            )
          })
        }
      </div>
      <img src={councilPicture} className="past-council-pics desktop-only" />
    </div>
  )
}