// src/components/TeamMemberModal.js
import React from 'react';

const TeamMemberModal = ({ member, onClose }) => {
  return (
    <div className="team-member-modal">
      <div className="modal-content">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TeamMemberModal;
