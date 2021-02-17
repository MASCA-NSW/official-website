import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import PastCouncil from './pages/PastCouncil';
import Events from './pages/Events';
import Initiatives from './pages/Initiatives';
import StudentWelfare from './pages/StudentWelfare';
import CareersDevelopment from './pages/CareersDevelopment';
import CulturalInitiatives from './pages/CulturalInitiatives';
import SportsInitiatives from './pages/SportsInitiatives';
import OfficersProgram from './pages/OfficersProgram';
import StudentDiscounts from './pages/StudentDiscounts';
import StudentGuide from './pages/StudentGuide';
import StarterKit from './pages/StarterKit';
import JalanJalan from './pages/JalanJalan';
import CariMakan from './pages/CariMakan';
import SydneyHalalPlaces from './pages/SydneyHalalPlaces';
import WollongongHalalPlaces from './pages/WollongongHalalPlaces';
import NewcastleHalalPlaces from './pages/NewcastleHalalPlaces';
import AffiliatesSponsors from './pages/AffiliatesSponsors';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Switch> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/past-council" component={PastCouncil} />
          <Route path="/events" component={Events} />
          <Route path="/initiatives" component={Initiatives} />
          <Route path="/welfare-initiatives" component={StudentWelfare} />
          <Route path="/careers-initiatives" component={CareersDevelopment} />
          <Route path="/cultural-initiatives" component={CulturalInitiatives} />
          <Route path="/sports-initiatives" component={SportsInitiatives} />
          <Route path="/officers-program" component={OfficersProgram} />
          <Route path="/student-discounts" component={StudentDiscounts} />
          <Route path="/student-guide" component={StudentGuide} />
          <Route path="/starter-kit" component={StarterKit} />
          <Route path="/jalan-jalan" component={JalanJalan} />
          <Route exact path="/cari-makan" component={CariMakan} />
          <Route path="/cari-makan/sydney" component={SydneyHalalPlaces} />
          <Route path="/cari-makan/wollongong" component={WollongongHalalPlaces} />
          <Route path="/cari-makan/newcastle" component={NewcastleHalalPlaces} />
          <Route path="/affiliates-sponsors" component={AffiliatesSponsors}/>
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
