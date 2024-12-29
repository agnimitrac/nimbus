import React from 'react';
import './HomePage.css'; // Link to the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Header with tabs */}
      <div className="header">
        <a href="#sectionA">Section A</a>
        <a href="#sectionB">Section B</a>
        <a href="#sectionC">Section C</a>
        <a href="#sectionD">Section D</a>
      </div>
    </div>
  );
};

export default HomePage;
