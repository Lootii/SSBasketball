// Inside Contact.js

import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-box">
        <div className="icon-wrapper">
          {/* Your call icon image */}
          <img src="/images/call.png" alt="Call Icon" />
        </div>
        <h2>Call Us</h2>
        <p><a href="tel:6138903809">Phone number: (613)890-3809</a></p>
        <p>Give us a call, we are here to help!</p>
      </div>

      <div className="contact-box">
        <div className="icon-wrapper">
          {/* Your email icon image */}
          <img src="/images/email.png" alt="Email Icon" />
        </div>
        <h2>Email Us</h2>
        <p>Send us an Email: <a href="mailto:ShakeYourShadow@Gmail.com">ShakeYourShadow@Gmail.com</a></p>
        <p>For business inquiries, email our team and we will get back to you shortly.</p>
      </div>

      <div className="contact-box">
        <a href="https://www.instagram.com/shakeyourshadow/" target="_blank" rel="noopener noreferrer">
          <div className="icon-wrapper">
            {/* Your social media icon image */}
            <img src="/images/ig.jpeg" alt="Social Media Icon" />
          </div>
          <h2>Social Media</h2>
          <p>Click here to follow us on Instagram @ShakeYourShadow</p>
        </a>
        <p><span role="img" aria-label="star">⭐</span>Never miss updates on camps and training sessions.</p>
        <p><span role="img" aria-label="star">⭐</span>Check out the latest videos and pictures from our media team.</p>
        <p><span role="img" aria-label="star">⭐</span>Follow for annual deals and giveaways!!</p>
      </div>
      <p className="c"> Questions, comments or concerns? Contact us now. </p>
    </div>
  );
};

export default Contact;



