import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/Main.css"

export default function Main() {
  return (
    <div>


<div className="main-container">
      <div className="main-content">
        <h1 className="project-title">
          Welcome to AI hydroponic  Systems <br />
          Your Eco-friendly Solution
        </h1>
        <p className="project-description">
          A project designed to help preserve the environment through technology.
        </p>
        <p className="contributors">
          Presented by: Sakshi Sonawane 
, sneha thote 
, purvaja patil 
, Rani pimple 
, jayshree rathod
        </p>
        <div className="scan-button-container">
          <Link to="/scanImage" className="scan-button">
            Scan My Image
          </Link>
        </div>
      </div>
    </div>


    </div>
  )
}
