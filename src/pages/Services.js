// src/pages/Services.js
import React from 'react';
import Frame556 from '../assets/images/Frame556.png'; 
import Frame598 from '../assets/images/Frame598.png'; 
import Frame585 from '../assets/images/Frame585.png'; 


function Services() {
  return (
    <div className='service-div'>
      <div className="text-container">
        <div className="text-left">
          <h2>OUR SERVICE</h2>
        </div>
        <div className="text-right">
          <h2>The Transalliance Group. difference</h2>
          <p className='text-rightP'>Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
          </p>
        </div>
      </div>
      <div className="text-container">
        <img 
          src={Frame556} 
          alt="Travel Concept with Documents" 
        />
        <img 
          src={Frame598} 
          alt="Travel Concept with Documents"
          className='Frame598'
        />
      </div>
      <div>
        <img 
          src={Frame585} 
          alt="service-footer"
          className='Frame585'
        />
      </div>
    </div>
  );
}

export default Services;
