export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        <span className="footer-copy">© {year} NorthWeave</span>

        <div className="footer-links">
          <a href="mailto:magnus@northweave.no">magnus@northweave.no</a>
          <span className="dot" aria-hidden="true">·</span>
          <a href="mailto:andreas@northweave.no">andreas@northweave.no</a>
        </div>
      </div>
    </footer>
  );
}
