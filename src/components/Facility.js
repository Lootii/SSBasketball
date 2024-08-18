import React from 'react';
import './Facility.css'; // Import your CSS file

const Facility = () => {
  return (
    <div className="facility" id="facility">
      <div className="facility-background">
        {/* Image for the facility */}
        <img src="/images/gym.jpeg" alt="Facility" />
        {/* Title hovering over the image */}
        <h2 className="image-title">THE L A B</h2>
      </div>

      <div className="bubble-section">
        {/* Facility description */}
        <h2 className="text">Our Facility</h2>
        <p className="text">
          We'd like to express our appreciation to St-Laurent Academy - Ottawa Private School for offering us
          access to their fantastic facility. The fully renovated full-sized gym, complete with hardwood floors and a
          gym divider, will be the venue for our basketball camps and personal training sessions.
        </p>
      </div>
    </div>
  );
};

export default Facility;