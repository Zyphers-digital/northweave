import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./SideBarMenu.css";

export default function SideBarMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lukker menyen ved ESC og hindrer scrolling når åpen
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Alle sidelenker
  const links = [
    { name: "Hjem", path: "/" },
    { name: "Produkter", path: "/produkter" },
    { name: "Hva vi gjør", path: "/hva-vi-gjor" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakt oss", path: "/kontakt" },
  ];

  return (
    <>
      {/* Toggle-knapp (☰ / ✕) */}
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Lukk meny" : "Åpne meny"}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Bakgrunn (lukker ved klikk utenfor) */}
      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      {/* Selve panelet */}
      <aside className={`sidebar ${open ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <nav>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setOpen(false)} // lukk når man klikker på en lenke
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}


