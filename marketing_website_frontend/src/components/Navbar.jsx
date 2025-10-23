import React, { useState } from "react";
import { sections } from "../theme";

/**
 * PUBLIC_INTERFACE
 * Navbar component with sticky behavior and active link highlighting.
 * Props:
 * - active: string (current active section id)
 * - onNavClick: function(id) to smooth-scroll to section
 */
export default function Navbar({ active, onNavClick }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id: sections.home, label: "Home" },
    { id: sections.services, label: "Services" },
    { id: sections.testimonials, label: "Testimonials" },
    { id: sections.contact, label: "Contact" },
  ];

  return (
    <header
      role="banner"
      className="navbar-sticky"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.85)",
        backdropFilter: "saturate(140%) blur(8px)",
        borderBottom: "1px solid rgba(17,24,39,.06)",
      }}
    >
      <nav className="container" role="navigation" aria-label="Primary">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "space-between",
            padding: ".75rem 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <div
              aria-hidden="true"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,1), rgba(6,182,212,1))",
                boxShadow: "0 6px 16px rgba(59,130,246,.35)",
              }}
            />
            <strong style={{ letterSpacing: "-.02em" }}>
              Vivid Marketing
            </strong>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn btn-secondary"
            style={{ display: "none" }}
          >
            Menu
          </button>

          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".75rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <button
                    className="btn"
                    onClick={() => onNavClick(l.id)}
                    style={{
                      background: isActive ? "rgba(59,130,246,.10)" : "transparent",
                      borderColor: isActive
                        ? "rgba(59,130,246,.30)"
                        : "transparent",
                      color: isActive ? "var(--primary)" : "var(--text)",
                      padding: ".5rem .9rem",
                      borderRadius: 999,
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
