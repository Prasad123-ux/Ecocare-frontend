import React from "react";
import "../Assets/DocumentationSection.css"; // Add custom CSS here 


export default function DocumentationSection() {
  return (
    <div className="documentation-section">
      <div className="section-title">
        <h1>Project Documentation</h1>
        <p>Your comprehensive guide to understanding and using the application</p>
      </div>

      {/* Overview */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          <strong>Application of AI in Hydrophobic Systems</strong> aims to enhance agriculture by 
          identifying and addressing plant diseases efficiently using technology. 
          This platform combines AI, intuitive design, and robust database management 
          to deliver a seamless experience for users.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Responsive user interface for desktop and mobile</li>
          <li>Comprehensive database of plant diseases and solutions</li>
          <li>Team and contact sections for user engagement</li>
          <li>Built with modern technologies for optimal performance</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="technologies">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>Frontend:</strong> React, HTML, CSS, Bootstrap</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Hosting:</strong> Vercel (Frontend), Render (Backend)</li>
          <li><strong>Version Control:</strong> GitHub</li>
        </ul>
      </section>

      {/* Installation Guide */}
      <section className="installation">
        <h2>Installation Guide</h2>
        <ol>
          <li>Install <strong>Node.js</strong> and <strong>MongoDB</strong>.</li>
          <li>Clone the repository from GitHub.</li>
          <li>Run <code>npm install</code> to install dependencies.</li>
          <li>Start the application with <code>npm start</code>.</li>
        </ol>
      </section>

      {/* User Guide */}
      <section className="user-guide">
        <h2>User Guide</h2>
        <ul>
          <li><strong>Homepage:</strong> Displays an overview of the application.</li>
          <li><strong>About Section:</strong> Explains the project's purpose and team.</li>
          <li><strong>Disease Details:</strong> Lists symptoms, solutions, and images of plant diseases.</li>
          <li><strong>Contact Section:</strong> Allows users to provide feedback.</li>
        </ul>
      </section>

      {/* Future Enhancements */}
      <section className="future-enhancements">
        <h2>Future Enhancements</h2>
        <p>
          Our goal is to implement AI-based image recognition for real-time disease detection, 
          provide regional disease suggestions, and add offline support for low-connectivity users.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Team Members</h2>
        <ul>
          <li><strong>Sakshi Sonawane:</strong> Frontend Developer</li>
          <li><strong>Sneha Thote:</strong> Backend Developer</li>
          <li><strong>Purvaja  Patil:</strong> Database Architect</li>
          <li><strong>Rani Pimple:</strong> UI/UX Designer</li>
          <li><strong>Jayshree Rathod:</strong> Project Manager</li>
        </ul>
      </section>
    </div>
  );
}
