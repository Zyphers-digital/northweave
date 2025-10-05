// src/components/TopLogo.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoMini from "../assets/NorthWeaveLogoMini.svg"; // ← din fil

export default function TopLogo() {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    // Hvis du allerede er på forsiden, scroll til toppen i stedet for å navige­re
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="toplogo">
      <div className="toplogo__glow" />
      <Link
        to="/"
        className="toplogo__link"
        aria-label="Gå til forsiden"
        onClick={handleClick}
      >
        <img src={LogoMini} alt="NorthWeave" />
      </Link>
    </div>
  );
}
