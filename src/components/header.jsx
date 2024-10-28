// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Anarchy Bites</h1>
      <nav>
        <a href="#menu">The Bites</a>
        <a href="#vibe">The Vibe</a>
        <a href="#contact">Join the Riot</a>
      </nav>
    </header>
  );
}

export default Header;
