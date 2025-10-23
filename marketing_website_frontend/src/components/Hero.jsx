import React from "react";
import { theme } from "../theme";

/**
 * PUBLIC_INTERFACE
 * Hero section with bold headline, subtext, and CTA buttons.
 * Props:
 * - id: string for section anchor
 * - onPrimaryCta: function
 * - onSecondaryCta: function
 */
export default function Hero({ id, onPrimaryCta, onSecondaryCta }) {
  return (
    <section
      id={id}
      className="section"
      /* Remove extra top whitespace so it sits flush under navbar */
      style={{ paddingTop: 0, paddingBottom: 72 }}
    >
      <div
        style={{
          /* remove internal background so outer wrapper controls gradient span */
          background: "transparent",
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          border: "1px solid rgba(17,24,39,.06)",
          boxShadow: "var(--shadow-lg)",
        }}
        className="container"
      >
        {/* Animated decorative shapes */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -40,
            right: -60,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(59,130,246,.20), transparent)",
            filter: "blur(6px)",
            animation: "float 8s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -30,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(6,182,212,.18), transparent)",
            filter: "blur(8px)",
            animation: "float 10s ease-in-out infinite",
            animationDelay: "1.2s",
            zIndex: 0,
          }}
        />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(-8px) }
          }
        `}</style>

        <div
          className="container hero-grid"
          style={{
            paddingTop: 56, /* tighten internal spacing */
            paddingBottom: 64,
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            gap: "2rem",
            position: "relative",
            zIndex: 1, /* ensure content sits above decor */
          }}
        >
          {/* Responsive adjustments */}
          <style>{`
            @media (max-width: 900px) {
              #${id} .hero-grid {
                grid-template-columns: 1fr !important;
                gap: 1.25rem !important;
              }
            }
          `}</style>
          <div>
            <span className="badge">Marketing Consulting</span>
            <h1
              style={{
                fontSize: "clamp(2rem, 1.5rem + 3vw, 3.25rem)",
                margin: ".5rem 0",
                letterSpacing: "-.02em",
              }}
            >
              Ignite growth with modern strategy and bold creativity.
            </h1>
            <p style={{ color: "var(--muted-text)", fontSize: "1.05rem", maxWidth: 640 }}>
              We design data-driven campaigns and striking brand experiences to
              unlock measurable results. Partner with a team obsessed with your
              success.
            </p>

            <div style={{ display: "flex", gap: ".75rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={onPrimaryCta}>
                Explore Services
              </button>
              <button className="btn btn-secondary" onClick={onSecondaryCta}>
                Contact Us
              </button>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.25rem", color: "var(--muted-text)", fontSize: ".95rem" }}>
              <div>• Strategy</div>
              <div>• Creative</div>
              <div>• Performance</div>
            </div>
          </div>

          <div style={{ alignSelf: "center", justifySelf: "center", width: "100%" }}>
            {/* Main visual: brand logo */}
            <figure
              style={{
                margin: 0,
                display: "grid",
                placeItems: "center",
                padding: "1.1rem",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,.10), rgba(6,182,212,.10))",
                border: "1px solid rgba(17,24,39,.06)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <img
                src="/assets/logo/brand-logo.jpg"
                alt="CB Strategy Brand Logo"
                style={{
                  width: "100%",
                  maxWidth: 520,
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 10px 24px rgba(17,24,39,.15))",
                  borderRadius: "12px",
                }}
              />
              <figcaption className="visually-hidden">Primary brand mark visual</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
