import React from 'react';
import Frame527 from '../assets/images/Frame527.png';
import Frame526 from '../assets/images/Frame526.png';
import TravelConceptWithDocuments from '../assets/images/TravelConceptWithDocuments.png'; // The image with the passport and plane ticket
import Frame525 from '../assets/images/Frame525.png'; // The "Discover More" button image

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

      <section className="discover-more-section">
        <img src={TravelConceptWithDocuments} alt="Travel Concept with Documents" className="travel-concept-img" />
        <img src={Frame525} alt="Discover More Button" className="discover-more-button-img" />
      </section>

    </div>
  );
}

export default Home;
