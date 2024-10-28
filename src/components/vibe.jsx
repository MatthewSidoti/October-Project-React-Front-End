// src/components/Vibe.js
import React from 'react';
import './Vibe.css';

function Vibe() {
  return (
    <section id="vibe" className="vibe">
      <h2>The Vibe</h2>
      <div className="vibe-gallery">
        {/* You can add images here later or use placeholders */}
        <div className="vibe-photo vibe-photo-1"></div>
        <div className="vibe-photo vibe-photo-2"></div>
        <div className="vibe-photo vibe-photo-3"></div>
      </div>
    </section>
  );
}

export default Vibe;
