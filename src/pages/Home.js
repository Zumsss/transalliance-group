import React from 'react';
import Frame527 from '../assets/images/Frame527.png';
import Frame526 from '../assets/images/Frame526.png';

function Home() {

  const imageStyle = {
    width: '50%',
    height: 'auto',
    marginLeft: '30%',
  };

  return (
    <div style={{ backgroundColor: '#122038' }}>
      <section className="features">
        <div className="feature feature-left">
          <img src={Frame527} alt="get started" style={imageStyle} />
          <p className="frame527text">Transalliance Group’s cross-border payments solutions connect organisations and communities globally to the network they need to thrive. Together, we make money move.</p>
        </div>
        <div className="feature feature-right">
          <img src={Frame526} alt="get started" style={imageStyle} />
        </div>
      </section>
    </div>
  );
}

export default Home;
