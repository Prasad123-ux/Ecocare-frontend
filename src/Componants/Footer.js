import React from 'react';
import "../Assets/Footer.css";

export default function Footer  ()  {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="project-info">
          <h2>About EcoCare</h2>
          <p>
            EcoCare is a collaborative project aimed at providing solutions for plant disease identification and sustainable practices to protect plant health. We are passionate about leveraging technology to make a positive impact on the environment.
          </p>
        </div>

        <div className="team-info">
          <h2>Meet the Team</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/sakshi-sonawane" target="_blank" rel="noopener noreferrer">
                Sakshi Sonawane
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sneha-thote" target="_blank" rel="noopener noreferrer">
                Sneha Thote
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/purvja-patil" target="_blank" rel="noopener noreferrer">
                Purvja Patil
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rani-pimple" target="_blank" rel="noopener noreferrer">
                Rani Pimple
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jayshree-rathod" target="_blank" rel="noopener noreferrer">
                Jayshree Rathod
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoCare Project | All Rights Reserved</p>
        <p>Crafted with ❤️ by Team EcoCare</p>
      </div>
    </footer>
  );
};


