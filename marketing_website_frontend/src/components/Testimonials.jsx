import React, { useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * Testimonials section with horizontal scrollable cards.
 * Props:
 * - id: string for section anchor
 */
export default function Testimonials({ id }) {
  const scrollerRef = useRef(null);
  const items = [
    {
      name: "Avery Chen",
      role: "VP Marketing, NovaTech",
      quote:
        "Vivid transformed our go-to-market with creative that actually performs. We saw a 48% lift in qualified leads.",
    },
    {
      name: "Jordan Smith",
      role: "Founder, Brightly",
      quote:
        "Strategy-first, design-forward. Their team pushed us to think bigger while keeping the KPIs front and center.",
    },
    {
      name: "Priya Patel",
      role: "CMO, Horizon Labs",
      quote:
        "A partner we trust. Reliable, innovative, and always on top of the details that matter.",
    },
  ];

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = dir === "next" ? 320 : -320;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id={id} className="section container">
      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: "1rem" }}>
        <div>
          <h2 className="section-title">What clients say</h2>
          <p className="section-subtitle">Proof in the results and relationships.</p>
        </div>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <button className="btn btn-secondary" onClick={() => scrollByCards("prev")} aria-label="Previous testimonials">
            ←
          </button>
          <button className="btn btn-primary" onClick={() => scrollByCards("next")} aria-label="Next testimonials">
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(280px, 1fr)",
          gap: "1rem",
          overflowX: "auto",
          paddingBottom: ".5rem",
          scrollSnapType: "x mandatory",
        }}
        aria-label="Testimonials"
      >
        {items.map((t) => (
          <figure
            key={t.name}
            className="card"
            style={{
              scrollSnapAlign: "start",
              display: "grid",
              gap: ".5rem",
              minHeight: 200,
            }}
          >
            <blockquote style={{ margin: 0, fontSize: "1rem" }}>
              “{t.quote}”
            </blockquote>
            <figcaption style={{ color: "var(--muted-text)" }}>
              — {t.name}, {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
