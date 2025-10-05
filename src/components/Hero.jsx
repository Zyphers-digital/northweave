// src/components/Hero.jsx
import React from "react";
import useParallax from "../hooks/useParallax";      // OK (ett nivå opp til hooks)
import Logo from "../assets/NorthWeaveLogo.svg";     // logo fra assets
import { Link } from "react-router-dom";

export default function Hero() {
  // Hooken styrer hero-bakgrunnen (mesh/glow) – ingen refs/styles nødvendig
  useParallax();

  return (
    <section className="hero">
      {/* Dekor-lag (hooken oppdaterer disse) */}
      <div className="hero__mesh" aria-hidden />
      <div className="hero__glow" aria-hidden />

      <div className="hero__inner app-container">
        <div className="hero__brand">
          <img className="hero__logo" src={Logo} alt="NorthWeave" />
        </div>

        <h1 className="hero__title">
          <span className="grad">Vi former fremtiden</span><br />med karboninnovasjon.
        </h1>

        <p className="hero__lead">
          NorthWeave kombinerer nordisk presisjon med avansert komposittteknologi.
          Vi designer, former og optimaliserer karbonkomponenter — for en sterkere, lettere fremtid.
        </p>

        <div className="hero__actions">
          <Link to="/produkter" className="btn">Se produkter</Link>
          <Link to="/kontakt" className="btn btn--ghost">Kontakt oss</Link>
        </div>

        <ul className="hero__bullets">
          <li>Forged carbon</li>
          <li>3D-modellering & prototyping</li>
          <li>Produksjon</li>
        </ul>
      </div>
    </section>
  );
}


