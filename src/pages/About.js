// src/pages/About.js
import React from 'react';
import AboutUs from '../assets/images/AboutUs.png';
import AboutUsFooter from '../assets/images/AboutUsFooter.png';


function About() {
  return (
    <div className="about-container">
      <img 
          src={AboutUs} 
          alt="About Us" 
          className="AboutUs-image" 
        />
        <img 
          src={AboutUsFooter} 
          alt="About Us" 
          className="AboutUs-image" 
        />
    </div>
  );
}

export default About;
