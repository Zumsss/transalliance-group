// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logoImage.png';
import Frame576 from '../assets/images/Frame576.png';

function Header() {

  const logoStyle = {
    width: '30px',
    height: 'auto',
    marginLeft: '50%',
  };

  const imageStyle = {
    width: '80px',
    height: 'auto',
  };

  const menuStyle = {
    fontSize: '12px',
    marginRight: '0%',
  };


  return (
    <header>
      <nav>
        <h1><img src={logoImage} alt="home logo" style={logoStyle} /></h1>
        
        <ul>
          <li>
            <li>
              <ul style={menuStyle} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Solutions</Link></li>
                <li><Link to="/services">News & Insights</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </li>
          </li>
          <li><img src={Frame576} alt="get started" style={imageStyle} /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
