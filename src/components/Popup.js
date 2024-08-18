import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Training Options</h2>
        <div className="training-options">
          {/* Sections for 1-on-1, partner training, group training, team trainings */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
