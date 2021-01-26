import React from 'react';

// our own components
import PastCouncilMember from '../components/PastCouncilMember';

// stylesheets
import './PastCouncilYear.css'

export default function PastCouncilYear({ parentClassName, whichYear, councilPicture, whichCouncil }) {
  return (
    <div className={parentClassName}>
      <div className={`${parentClassName}-content`}>
        <h2 className={`${parentClassName}-title`}>The Council {whichYear}</h2>
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