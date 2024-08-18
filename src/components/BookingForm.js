// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        time: '',
        trainingType: '',
        partnerDetails: '',
        groupDetails: '',
        teamDetails: '',
        calendarDate: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        // Optionally, you can reset the form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            time: '',
            trainingType: '',
            partnerDetails: '',
            groupDetails: '',
            teamDetails: '',
            calendarDate: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                />
            </label>
            {/* Add other form fields for age, time, training type, etc. */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookingForm;
