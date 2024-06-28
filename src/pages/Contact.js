// src/pages/Contact.js
import React from 'react';
import image48 from '../assets/images/image48.png'; 
import Frame591 from '../assets/images/Frame591.png'; 
import Frame577 from '../assets/images/Frame577.png'; 
import Frame558 from '../assets/images/Frame558.png'; 

function Contact() {
  return (
    <div>
      <div>
        <img 
          src={Frame558} 
          alt="contact-header"
          className='Frame558'
        />
      </div>
      <div className="text-container">    
        <img 
          src={image48} 
          alt="..."
          className='image48'
        />
        <img 
          src={Frame591} 
          alt="..."
          className='Frame591'
        />
      </div>
      <div>
        <img 
          src={Frame577} 
          alt="contact-footer"
          className='Frame577'
        />
      </div>
    </div>
  );
}

export default Contact;
