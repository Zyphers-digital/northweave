// src/components/TopCTA.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TopCTA({ label = "Få tilbud" }) {
  return (
    <div className="topcta">
      <Link to="/kontakt" className="topcta__btn" aria-label={label}>
        {/* liten konvolutt-ikon + tekst */}
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" fill="currentColor" opacity=".16"/>
          <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Få tilbud</span>
      </Link>
    </div>
  );
}
