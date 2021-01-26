import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import PastCouncil from './pages/PastCouncil';
import Events from './pages/Events';
import Initiatives from './pages/Initiatives';

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
          <Route path="/welfare-initiatives" />
          <Route path="/careers-initiatives" />
          <Route path="/cultural-initiatives" />
          <Route path="/sports-initiatives" />
          <Route path="/officers-program" />
          <Route path="/student-discounts" />
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
