import React from 'react';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="homepage" id = "home">
      <div className="background-image">
        <div className="overlay">
          <h1 className="main-title">$ H A K E    Y O U R    $ H A D O W</h1>
          <p className="subtitle">Train Elite, Be Elite.</p>
        </div>
      </div>
      {/* Add other content as needed */}
    </div>
  );
};

export default HomePage;
