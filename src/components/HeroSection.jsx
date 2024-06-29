import React from "react";
import "./HeroSection.css";
import image from "../assets/image.jpeg";
import { Link, useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleTrackExpenses = () => {
    navigate("/track");
  };
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your expenses effortlessly and efficiently.</p>
        <button onClick={handleTrackExpenses} className="nav-button">
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src={image} alt="Expense Tracker Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
/*

  const handleTrackExpenses = () => {
    navigate('/track');
  };
<button onClick={handleTrackExpenses} className="nav-button">
        Get Started
      </button>
*/
