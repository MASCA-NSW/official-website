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

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
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
          <Route path="/student-guide" />
          <Route path="/starter-kit" />
          <Route path="/jalan-jalan" />
          <Route path="/cari-makan" />
          <Route path="/affiliates-sponsors" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
