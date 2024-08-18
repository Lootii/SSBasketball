import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your CSS file

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navigation">
      <div className="logo">
        <img src="/images/ball.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="tabs">
        <Link to="/" onClick={() => scrollToSection('home')} className="tab">
          Home
        </Link>
        <Link to="/about" onClick={() => scrollToSection('about')} className="tab">
          About Us
        </Link>
        <Link to="/training" onClick={() => scrollToSection('training')} className="tab">
          Training
        </Link>
        <Link to="/facility" onClick={() => scrollToSection('facility')} className="tab">
          Facility
        </Link>
        <Link to="/contact" onClick={() => scrollToSection('contact')} className="tab">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;