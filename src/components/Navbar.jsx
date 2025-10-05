// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]   = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);                // aktiver glass ved litt scroll
      if (y > lastY + 8 && y > 80) setHidden(true);
      else if (y < lastY - 8) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav ${scrolled ? "nav--scrolled" : ""} ${hidden ? "nav--hidden" : ""}`}
      aria-hidden="true"             // ingen innhold—skjul for skjermlesere
    >
      <div className="nav-inner" />
    </header>
  );
}
