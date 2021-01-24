import React from 'react';

import './MemoryLane.css';

export default function MemoryLane({ pic1, pic2, pic3, pic4 }) {
  return (
    <div className="memory-lanes-container">
      <img src={pic1} className="memory-lanes" alt=""/>
      <img src={pic2} className="memory-lanes" alt="" />
      <img src={pic3} className="memory-lanes" alt="" />
      <img src={pic4} className="memory-lanes" alt="" />
    </div>
  )
}