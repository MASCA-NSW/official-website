import React from 'react';

// our own components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// images
import koala from '../images/logo/koala-logo.png';

// stylesheets
import './StudentWelfare.css';

export default function StudentWelfare() {
  return (
    <div>
      <Navbar parentClassName="sw-header" />
      <div className="sw-body">
        <h1>Student Welfare</h1>
        <p>As one of the seven pillars of MASCA, we strive to ensure the welfare of the Malaysian student community within the State by providing assistance with their support system, health, accommodation and social integration into university as well as life in NSW through initiatives such as KOALA, Meet & Greet & Kopitalk.</p>
        <div className="welfare-initiatives">
          <div className="koala">
            <img src={koala} className="welfare-initiatives-logos"/>
            <p>KOALA, Companion on Arrival in Australia aims to serve as a platform to connect incoming and current Malaysian students in Australia, and to provide first hand introduction and assistance to new students, much like a buddy system.</p>
            <p>KOALA services include assistance prior to and after their departure to New South Wales.</p>
            <u>Pre-departure</u>
            <ul>
              <li>Students will be assigned a contact to current students in New South Wales to assist with any questions or lingering doubts.</li>
              <li>The services may range from assistance with temporary housing on arrival to form filling.</li>
            </ul>
            <u>Post-departure</u>
            <ul>
              <li>Students get access to free airport pickup services and would be able to obtain a tour of their respective university, as well as guidance in terms of application for mobile phone and banking account, and using public transportation in New South Wales.</li>
            </ul>
          </div>
          <div className="kopi-talk">
            <h1>Kopi Talk</h1>
            <p>With KopiTalk, we aim to achieve a single yet important goal; to raise awareness and address mental health problems in Malaysian students.</p>
            <p>Our decision making process is informed by comprehensive empirical studies and high quality data evaluation. At the core of the Malaysian dilemma are the social and cultural nuances of its unforgiving society. We hope, that by increasing awareness on subjects considered as taboo by our culture, we would be able to reduce incidence of mental health disorders stemming from these issues!</p>
            <p>At KopiTalk, we'd like to encourage conversations on current dilemmas and issues considered as taboo subjects as means of raising awareness.</p>
            <p>For more information on KopiTalk, or to engage in discussion and conversation to break the stigma surrounding this issue, click the link below.</p>
          </div>
          <div className="meet-n-greet">
            <h1>Meet n Greet</h1>
            <p>The annual Meet & Greet (MnG) hosted by MASCA NSW is a flagship event with the aim of uniting all Malaysian students in the state of New South Wales. Netting an average of nearly 400 participants annually, it is arguably MASCA NSW's biggest event.</p>
            <p>With MnG, we hope to introduce new students to existing services provided by official Malaysian governing education attachés under the flag of Education Malaysian Australia as well as other Malaysian student societies.</p>
            <p>We also aim to equip students with relevant and essential information regarding their health and safety as well as highlighting key differences between the law and societal standards of Malaysia and Australia to brace them from any culture shock.</p>
            <p>MnG also aims to foster unity and better ties between Malaysian students, Malaysia student societies and MASCA NSW.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}