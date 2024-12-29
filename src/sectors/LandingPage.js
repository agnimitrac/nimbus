import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Ensure you have the styles loaded

const LandingPage = () => {
  const [clicked, setClicked] = useState(false); // State to track the click event
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    setClicked(true); // Trigger the disintegration animation
    setTimeout(() => {
      navigate('/home'); // Navigate to the home page after animation
    }, 2000); // Adjust the timeout to match animation duration
  };

  return (
    <div className={`container ${clicked ? 'reveal-content' : ''}`}>
      <div className={`halo ${clicked ? 'disintegrate' : ''}`} onClick={handleClick}>
        <p className="text">Project Ataraxia</p>
      </div>
      <div className={`content ${clicked ? 'visible' : ''}`}>
        <h1>Welcome to the Landing Page</h1>
        <p>This is the content revealed after the halo disintegrates.</p>
      </div>
    </div>
  );
};

export default LandingPage;
