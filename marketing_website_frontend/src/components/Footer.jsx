import React from "react";

/**
 * PUBLIC_INTERFACE
 * Footer with company info and social placeholders.
 */
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 48,
        background: "linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%)",
        borderTop: "1px solid rgba(17,24,39,.06)",
      }}
    >
      <div className="container" style={{ padding: "2rem 0", display: "grid", gap: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div style={{ display: "grid", gap: ".5rem", minWidth: 240 }}>
            <strong>Vivid Marketing</strong>
            <p style={{ margin: 0, color: "var(--muted-text)" }}>
              Modern consulting for creative, data-driven growth.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: "none", display: "grid", gap: ".35rem", margin: 0, padding: 0 }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div aria-label="Social links" style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
            <a href="#" aria-label="Twitter" className="btn btn-secondary">X</a>
            <a href="#" aria-label="LinkedIn" className="btn btn-secondary">in</a>
            <a href="#" aria-label="Instagram" className="btn btn-secondary">IG</a>
          </div>
        </div>

        <div style={{ color: "var(--muted-text)", fontSize: ".9rem" }}>
          © {new Date().getFullYear()} Vivid Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
