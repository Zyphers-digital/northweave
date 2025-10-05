// src/hooks/useParallax.jsx
import { useEffect, useRef, useState } from "react";

/**
 * Enkel PARALLAX for Hero:
 * - Auto finner .hero, .hero__mesh, .hero__glow og animerer med transform (GPU).
 * - BG-parallax (svak) via backgroundPosition på .hero.
 *
 * Bruk:
 *   // auto-modus (anbefalt for din Hero)
 *   useParallax({ meshSpeed: 0.06, glowSpeed: 0.12, bgStrength: 0.06 });
 *
 *   // ref-modus (valgfr.)
 *   const mesh = useParallaxRef({ speed: 0.06, axis: "y" });
 *   <div ref={mesh.ref} style={mesh.style} />
 */

// ---------- AUTO-MODUS HOOK ----------
export default function useParallax({
  meshSelector = ".hero__mesh",
  glowSelector = ".hero__glow",
  heroSelector = ".hero",
  meshSpeed = 0.06,
  glowSpeed = 0.12,
  bgStrength = 0.06, // brukt på hero backgroundPosition
  axis = "y",
  enabled = true,
} = {}) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const hero = document.querySelector(heroSelector);
    const mesh = document.querySelector(meshSelector);
    const glow = document.querySelector(glowSelector);

    // Ingen elementer? Da gjør vi ingenting.
    if (!hero && !mesh && !glow) return;

    let raf = 0;
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = lastY;

      // BG-parallax (svakt) – fint for gradientbakgrunner
      if (hero && bgStrength) {
        // Bruk background-position for subtil dybde, uten layout thrash
        const offset = Math.round(y * bgStrength);
        hero.style.backgroundPosition = axis === "y" ? `center ${-offset}px` : `${-offset}px center`;
      }

      // Mesh og glow med GPU-vennlig translate3d
      if (mesh && meshSpeed) {
        const v = y * meshSpeed;
        mesh.style.willChange = "transform";
        mesh.style.transform = axis === "y"
          ? `translate3d(0, ${v}px, 0)`
          : `translate3d(${v}px, 0, 0)`;
      }
      if (glow && glowSpeed) {
        const v = y * glowSpeed;
        glow.style.willChange = "transform";
        glow.style.transform = axis === "y"
          ? `translate3d(0, ${v}px, 0)`
          : `translate3d(${v}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      lastY = window.scrollY || 0;
      if (!ticking) {
        ticking = true;
        raf = window.requestAnimationFrame(update);
      }
    };

    // initial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, meshSelector, glowSelector, heroSelector, meshSpeed, glowSpeed, bgStrength, axis]);
}

// ---------- REF-MODUS (VALGFRI) ----------
export function useParallaxRef({ speed = 0.1, axis = "y", enabled = true } = {}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = lastY;
      const v = y * speed;
      const transform = axis === "y"
        ? `translate3d(0, ${v}px, 0)`
        : `translate3d(${v}px, 0, 0)`;
      setStyle({ transform, willChange: "transform" });
    };

    const onScroll = () => {
      lastY = window.scrollY || 0;
      if (!ticking) {
        ticking = true;
        raf = window.requestAnimationFrame(update);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, axis, enabled]);

  return { ref, style };
}
