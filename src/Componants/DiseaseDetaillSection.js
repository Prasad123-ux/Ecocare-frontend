import React from "react";
// import "./DiseaseDetailsSection.css";
import "../Assets/DiseaseDetailSection.css"

export default function DiseaseDetailsSection () {
  // Sample data for diseases (can be fetched from an API or database)
  const diseases = [
    {
      name: "Anthracnose",
      symptoms: "Dark brown spots on leaves, eventual decay.",
      affectedPlants: ["Tomato", "Cucumber", "Bean", "Pepper"],
      solution: "Remove and destroy affected parts, apply fungicide.",
      isEdible: false,
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
    },
    {
      name: "Powdery Mildew",
      symptoms: "White powdery coating on leaves and stems.",
      affectedPlants: ["Rose", "Cucumber", "Grape", "Pumpkin"],
      solution: "Use sulfur-based fungicides, increase air circulation.",
      isEdible: true,
      image: "https://via.placeholder.com/300x200",
    },
    {
        name: "Cercospora Leaf Spot",
        symptoms: "Circular brown spots on leaves that may drop prematurely.",
        affectedPlants: ["Beet", "Spinach", "Soybean"],
        solution: "Apply fungicides and practice crop rotation.",
        isEdible: true,
        image: "https://via.placeholder.com/300x200",
      },
      {
        name: "Late Blight",
        symptoms: "Dark, water-soaked spots on leaves and stems that enlarge rapidly.",
        affectedPlants: ["Tomato", "Potato"],
        solution: "Use resistant varieties, apply fungicides, and remove infected plants promptly.",
        isEdible: false,
        image: "https://via.placeholder.com/300x200",
      },
      {
        name: "Damping Off",
        symptoms: "Seedlings collapse at the soil line, often with rot visible.",
        affectedPlants: ["Tomato", "Cucumber", "Spinach"],
        solution: "Ensure proper drainage and avoid overwatering.",
        isEdible: false,
        image: "https://via.placeholder.com/300x200",
      },
    {
      name: "Root Rot",
      symptoms: "Wilting leaves, stunted growth, brown mushy roots.",
      affectedPlants: ["Basil", "Parsley", "Lettuce", "Spinach"],
      solution: "Improve drainage, avoid overwatering, use fungicides.",
      isEdible: false,
      image: "https://via.placeholder.com/300x200",
    },
    {
        name: "Fusarium Wilt",
        symptoms: "Yellowing and wilting of leaves, often one-sided, with brown vascular streaks.",
        affectedPlants: ["Banana", "Tomato", "Cucumber"],
        solution: "Use resistant varieties, solarize soil, and improve drainage.",
        isEdible: true,
        image: "https://via.placeholder.com/300x200",
      },
  ];

  return (
    <div className="disease-details-section">
      <h2 className="section-title">Common Plant Diseases</h2>
      <p className="section-description">
        Learn about the most common plant diseases, their symptoms, and
        solutions to keep your garden healthy.
      </p>
      <div className="disease-cards">
        {diseases.map((disease, index) => (
          <div className="disease-card" key={index}>
            <img
              src={disease.image}
              alt={`${disease.name}`}
              className="disease-image"
            />
            <h3 className="disease-name">{disease.name}</h3>
            <p className="disease-symptoms">
              <strong>Symptoms:</strong> {disease.symptoms}
            </p>
            <p className="disease-affected-plants">
              <strong>Affected Plants:</strong> {disease.affectedPlants.join(", ")}
            </p>
            <p className="disease-solution">
              <strong>Solution:</strong> {disease.solution}
            </p>
            <p className="disease-edibility">
              <strong>Edible:</strong> {disease.isEdible ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


