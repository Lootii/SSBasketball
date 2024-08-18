// src/components/AboutUs.js
import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    // Add your team members with image paths and descriptions
    {
      name: 'Naziah Charles',
      image: '/images/Naz_pic.jpeg',
      description: 'Founder, Director and Trainer for SSBasketball. Naziah is a Skilled athlete known in the ontario basketball community as her early career has shown many sucesses. Naziah played for GCBA house league in grade 5 and for Gloucester Wolverines from grades 6-8. In Highschool Naziah was scouted to play in the inaugural OSBA womens basketball season and had great performances from grade 9 through 12 for the Louis Riel Academy Prep. In her grade 11 year, she was selected to play for team Ontario to represent the province. Naziah has continued her basketball journey with her commitment to the university of Ottawa WBB. Unfortunately due to a severe injury, Naziah was no longer able to play but decided to carry on her legacy through training the youth. She also has years of basketball camp experiences.',
    },
    {
      name: 'Lootii Kiri',
      image: '/images/lootii_pic.jpeg',
      description: 'Co-Founder, Web developer and Trainer for SSBasketball. Lootii is a Hard working individual on and off the court. Played for Gloucester Wolverines from grade 6-8. Participated in the inaugural OSBA womens season for the Louis Riel Academy Prep and played from grades 9 through 12. Lootii was planning on a commitment with the University of Toronto Blues WBB to play as a varsity athlete and study at one of the top universities in the country but due to Injuries and COVID-19, she decided to pursue her education in Computer Science at her home town (University of Ottawa). Lootii has always been a High achiever and worked many camps for the past 7 years. Great experience in mentoring the youth as she is also a Math, Science and Computing tutor. Lootii is also in the process of receiving her personal training certificate with her passion for fitness and lifestyle.',
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="about-us-background" id = "about">
      <div className="about-us">
        <div className="bubble-section">
          <h2 className="text">Welcome to SS Basketball </h2>
          <p className="text">
            We are dedicated to providing high-quality basketball training services to help players
            enhance their skills and reach their full potential. Our team is committed to fostering
            a passion for the game and instilling a sense of discipline and teamwork in every player.
          </p>
          <p className="text">Experienced Coaches: Our coaches are former elite level players with a passion for teaching and mentoring.</p>
          <p className="text">Certifications: Canada Basketball NCCP Learn to Train <span role="img" aria-label="check">✅</span></p>
        </div>

        <div className={`team-section ${selectedMember ? 'expanded' : ''}`}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleMemberClick(member)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="team-member-modal">
            <div className="modal-content">
              <img src={selectedMember.image} alt={selectedMember.name} />
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.description}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;

