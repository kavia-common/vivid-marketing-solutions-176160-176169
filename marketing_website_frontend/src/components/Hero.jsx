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
    <section id={id} className="section" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div
        style={{
          background: theme.gradient.heroBg,
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
          }}
        />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(-8px) }
          }
        `}</style>

        <div
          className="container"
          style={{
            paddingTop: 72,
            paddingBottom: 72,
            display: "grid",
            gridTemplateColumns: "1.2fr .8fr",
            gap: "2rem",
          }}
        >
          <div>
            <span className="badge">Marketing Consulting</span>
            <h1
              style={{
                fontSize: "clamp(2rem, 1.5rem + 3vw, 3.25rem)",
                margin: ".75rem 0",
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

            <div style={{ display: "flex", gap: ".75rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={onPrimaryCta}>
                Explore Services
              </button>
              <button className="btn btn-secondary" onClick={onSecondaryCta}>
                Contact Us
              </button>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.5rem", color: "var(--muted-text)", fontSize: ".95rem" }}>
              <div>• Strategy</div>
              <div>• Creative</div>
              <div>• Performance</div>
            </div>
          </div>

          <div style={{ alignSelf: "center", justifySelf: "center", width: "100%" }}>
            <div
              style={{
                aspectRatio: "4/3",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,.12), rgba(6,182,212,.12))",
                border: "1px dashed rgba(17,24,39,.1)",
                display: "grid",
                placeItems: "center",
                color: "var(--secondary)",
                boxShadow: "var(--shadow-md)",
              }}
              aria-label="Decorative marketing illustration"
              role="img"
            >
              <span>Marketing Insights Visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
