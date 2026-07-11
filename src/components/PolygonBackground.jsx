import React from 'react';
import './PolygonBackground.css';

const PolygonBackground = () => (
  <div className="polygon-bg">
    <div className="polygon-glow"></div>
    <div className="shapes-container">
      <div className="shape shape-hex shape1"></div>
      <div className="shape shape-tri shape2"></div>
      <div className="shape shape-hex shape3"></div>
      <div className="shape shape-circle shape4"></div>
      <div className="shape shape-tri shape5"></div>
      <div className="shape shape-hex shape6"></div>
    </div>
  </div>
);

export default PolygonBackground;
