import React from "react";
import "../Assets/AboutSection.css";
// import { FaGithub, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export default function AboutSection  ()  {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Our Project</h2>
        <p className="text-center lead mb-5">
          <strong>"Application of AI in Hydrophobic Systems"</strong> leverages cutting-edge AI technologies to optimize and analyze hydrophobic systems, advancing innovations and improving system efficiency.
        </p>

        {/* Features Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3>Key Features</h3>
            <ul>
              <li>AI-driven prediction for hydrophobic system behaviors.</li>
              <li>Real-time analysis and optimization capabilities.</li>
              <li>Interactive and advanced visualization tools.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Key Features"
              className="img-fluid rounded shadow-lg feature-img"
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className="technologies-section mb-5">
          <h3 className="text-center mb-4">Technologies Used</h3>
          <div className="row text-center">
            <div className="col-sm-4">
              <FaGithub  className="tech-icon" />
              <p>GitHub</p>
            </div>
            <div className="col-sm-4">
            <FaDatabase   className="tech-icon" />
              <p>MongoDB Database</p>
            </div>
            <div className="col-sm-4">
            <FaCloud  className="tech-icon" />
              <p>Vercel & Render</p>
            </div>
            <div className="col-sm-4">
            <FaTools  className="tech-icon" />
              <p>HTML, CSS, JavaScript, Bootstrap</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3 className="text-center mb-4">Our Team</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <p><strong>Sakshi Sonawane</strong></p>
              <p>Project Researcher</p>
            </div>
            <div className="col-md-4">
              <p><strong>Sneha Thote</strong></p>
              <p>UI/UX Designer</p>
            </div>
            <div className="col-md-4">
              <p><strong>Purvaja Patil</strong></p>
              <p>Backend Developer</p>
            </div>
            <div className="col-md-4">
              <p><strong>Rani Pimple</strong></p>
              <p>Frontend Developer</p>
            </div>
            <div className="col-md-4">
              <p><strong>Jayshree Rathod</strong></p>
              <p>Database Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

