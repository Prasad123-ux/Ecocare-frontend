import React, { useState } from 'react';
import "../Assets/Navbar.css"; 
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>AI Hydrophobic Systems</h1>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutSection">About</Link></li>
        <li><Link to="/diseasedetailSection">DiseaseDetails</Link></li>
        <li><Link to="/documentationSection">Documentation</Link></li> 
        <li><Link to="/scanImage">Scan Image</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
