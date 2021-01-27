import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// stylesheets
import './CulturalInitiatives.css';

export default function CulturalInitiatives() {
  return (
    <div>
      <Navbar parentClassName="cultural-initiatives-header" />
      <div className="cultural-initiatives-body">
        <h1>Cultural Connection</h1>
        <p>Being a Malaysian student organisation, we hope to share and promote the practice of cultural exchange between Malaysian, Australian or any foreign community. We also wish to showcase and share the beauty of the Malaysian culture to a wider global audience.</p>
        <div className="cultural-initiatives">
          <div className="makanmain">
            <h1>Makan & Main</h1>
            <p>Makan & Main is a literal translation of “food and fun” from the Malaysian national language and is an event held under the cultural portfolio to serve as a platform for the sharing of Malaysian arts, culture and cuisines with other foreign communities as well as among Malaysians to bring about a sense of unity as well as bridging communities.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}