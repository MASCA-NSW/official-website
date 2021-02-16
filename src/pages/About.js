import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faHeart,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';

// our own components
import Header from '../components/Header';
import CouncilMemberCard from '../components/CouncilMemberCard';
import Alert from '../components/Alert';
import Footer from '../components/Footer';

// images
import officer1 from '../images/current-council/officer1.jpg';
import officer3 from '../images/current-council/officer3.jpg';
import officer7 from '../images/current-council/officer7.jpg';

// data
import CouncilMembers from '../data/CouncilMembers';

import './About.css';

const currentYear = new Date().getFullYear();

export default function About() {
  return (
    <div>
      <Header parentClassName="about-header" />
      <div className="about-masca">
        <h1 className="about-masca-title dark-blue">About MASCA</h1>
        <p>
        Malaysian Students' Council of Australia, New South Wales Chapter (MASCA NSW) is a well established non-profit, non-political, multicultural and multiracial organisation as well as the peak Malaysian student representative body in the state of New South Wales. We are also recognised as the representatives of Malaysian students by the education section of the Malaysian Consulate, Education Malaysia.<br/><br/>
        As a council which oversees the interest and welfare of all 4,200 Malaysian students within the state, we emphasise on social, cultural and career development of the students via various activities throughout the year. MASCA NSW also provides the platform for Malaysian students to foster friendships and promote a wholesome overseas experience. ​​MASCA NSW works hand in hand with the national body and our state counterparts in ensuring that our goals are always aligned in accordance to the Founding Principles.
        <br/><br/>
        We also work closely with our affiliates to ensure that all Malaysian students obtain the best experience they can. MASCA NSW however does not interfere with the functions of our affiliates nor do we speak on behalf of our affiliates. Recognised by the Consulate of Malaysia (Education Section), Education Malaysia (formerly known as the Malaysian Students’ Department of Australia – MSDA) as the representatives of Malaysian students in NSW, MASCA NSW strives to uphold our core values, vision and mission.<br/><br/>
        The council consist of elected representatives from the various Malaysian Student Societies within the state. Elections are held once a year during the Annual General Meeting, whereby affiliated Malaysian student societies are given the mandate to elect the new representative council for the following term.
        </p>
      </div>
      <div className="current-directors">
        <h1 className="current-directors-title dark-blue">MASCA NSW Council {currentYear - 1}/{currentYear}</h1>
        <h3 className="current-directors-subtitle dark-blue">Our Directors</h3>
        <div className="current-directors-pics">
          {
            !CouncilMembers ? <h1>Oops! Something went wrong somewhere...</h1>
            : CouncilMembers.map((member) => {
              return (
                <CouncilMemberCard
                  src={member.imageSource}
                  alt={member.portfolio}
                  portfolio={member.portfolio}
                  name={member.name}
                  course={member.course}
                  uni={member.uni}
                />
              )
            })
          }
        </div>
      </div>
      <div className="current-officers">
        <h3 className="current-officers-subtitle dark-blue">Our Officers</h3>
        <Alert message={<h1>We will be recruiting officers soon.<br/>Tune in to <u><a href="https://www.facebook.com/mascansw">our Facebook page</a></u> to get the latest updates!</h1>} />
        <h3 style={{"margin":"1rem"}}>Below are some of the officers from last year's council:</h3>
        <div className="current-officers-pics">
          <CouncilMemberCard
            src={officer1}
            alt="Advocacy Director"
            name="Victoria Lyne Yeoh"
            course="Bachelor of Commerce"
            uni="UNSW"
          />
          <CouncilMemberCard
            src={officer3}
            alt="Advocacy Director"
            name="Wey Shern Tan"
            course="Bachelor of Food Science and Nutrition (Hons)"
            uni="UNSW"
          />
          <CouncilMemberCard
            src={officer7}
            alt="Advocacy Director"
            name="Jan Lum Fok"
            course="Bachelor of Engineering"
            uni="UNSW"
          />
        </div>
        <Link to="/past-council" className="past-council-link">
          Past Councils
        </Link>
      </div>
      <Footer />
    </div>
  )
}