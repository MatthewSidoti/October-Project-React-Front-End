import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function HomePage() {
  return (
    <div className="homepage">
      <img
        src="https://i.ibb.co/XWy1G95/Anarchy-Bites-logo-2.jpg"
        alt="Anarchy Bites Logo"
        className="logo"
      />
      <button>
        <Link to="/preview" className="explore-button">
          <h1>Let's Eat!</h1>
        </Link>
      </button>
    </div>
  );
}

export default HomePage;
