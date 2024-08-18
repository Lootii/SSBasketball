import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Facility from './components/Facility';
import Contact from './components/Contact';
import Training from './components/Training';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="training">
          <Training />
        </div>
        <div id="facility">
          <Facility />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </Router>
  );
}


export default App;