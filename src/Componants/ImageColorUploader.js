import React, { useState } from 'react';
import axios from 'axios';
import "../Assets/ImageColorUploader.css"

export default function ImageColorUploader  () {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isUploading, setIsUploading] = useState(false);


  const leafColors = [
    '#006400', // Dark Green (early growth, healthy leaf)
    '#228B22', // Forest Green (mature healthy leaf)
    '#7FFF00', // Chartreuse (young fresh leaf)
    '#ADFF2F', // Green Yellow (mid-growth, beginning to pale)
    '#FFD700', // Golden Yellow (aging, early decay)
    '#FF8C00', // Dark Orange (near full decay)
    '#8B4513', // Saddle Brown (dead, fully decayed leaf)
    '#654321', // Dark Brown (leaf in its final stage)
  ];

  // Predefined color options
 

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImage(file);
      setImagePreview(previewUrl);
    }
  };

  // Handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // Convert hex color to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Upload image and selected color to backend
  const handleUpload = async () => {
    if (!image || !selectedColor) {
      alert('Please select an image and a color!');
      return;
    }

    const rgbColor = hexToRgb(selectedColor);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('color', rgbColor);

    setIsUploading(true);

    try {
      const response = await axios.post('http://your-backend-endpoint/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload successful!');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Error during upload. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="image-color-uploader">
      <h2 className="title">Upload Image and Select a Color</h2>

      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
      </div>

      <div className="color-options">
        <h3>Pick a Leaf Color:</h3>
        <div className="color-buttons">
          {leafColors.map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: color,
                border: selectedColor === color ? '3px solid #000' : 'none',
              }}
              className="color-btn"
              onClick={() => handleColorSelection(color)}
            />
          ))}
        </div>
        <p>Selected Color: {selectedColor || 'None'}</p>
      </div>

      <button className="upload-btn" onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

// export default ImageColorUploader;
