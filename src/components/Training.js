import React, { useState } from 'react';
import './Training.css'; // Import your CSS file

const Training = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg"
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="training">
        <h1 className="title"> T R A I N I N G</h1>
      <div className="gallery">
        <img src={images[index]} alt={`Training ${index + 1}`} />
        <button className="prev" onClick={handlePrev}>&#8249;</button>
        <button className="next" onClick={handleNext}>&#8250;</button>
      </div>
      <div className="description">
        <h2 className="describe">Training Description</h2>
        <p className="describe">
        Whether you're just starting your basketball journey or looking to take your game to the next level, SSBasketball Training has a program for you. 
        We are dedicated to helping basketball players of all ages and skill levels reach their full potential. Our comprehensive training programs are designed to 
        improve fundamental skills, enhance game IQ, and build confidence on and off the court.
        </p>
        <button className="more" onClick={togglePopup}>Get Started Now!</button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={togglePopup}>Close</button>
            <h2>Choose Your Training</h2>
            <div className="training-options">
              <div className="training-option">
                <h3>1-on-1 Training</h3>
                <p>Customized training with a personal coach.</p>
                <p>Tailored sessions focusing on skill development, including shooting, ball-handling, footwork, and defensive techniques.</p>
              </div>
              <div className="training-option">
                <h3>Partner Training</h3>
                <p>Partner training offers a dynamic and engaging environment where individuals can work alongside a friend or family member to improve their basketball skills together.</p>
              </div>
              <div className="training-option">
                <h3>Group Training</h3>
                <p>Small group sessions for focused training.</p>
                <p>-personalized attention and game-like scenarios to improve decision-making and teamwork.</p>
              </div>
              <div className="training-option">
                <h3>Team Trainings</h3>
                <p>Team-oriented training for collective improvement.</p>
                <p>Customized programs for teams to enhance cohesion, strategy, and performance on the court.</p>
              </div>
            </div>
            <button className="book-now-btn">Book Now!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;


