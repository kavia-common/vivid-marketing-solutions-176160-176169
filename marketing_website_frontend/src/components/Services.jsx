import React from "react";

/**
 * PUBLIC_INTERFACE
 * Services section with grid of service cards.
 * Props:
 * - id: string for section anchor
 */
export default function Services({ id }) {
  const services = [
    {
      title: "Brand Strategy",
      desc: "Clarify your positioning and craft a distinctive identity that resonates.",
      icon: "🎯",
    },
    {
      title: "Campaign Creative",
      desc: "Bold concepts and beautiful design that capture attention and convert.",
      icon: "✨",
    },
    {
      title: "Performance Marketing",
      desc: "ROI-focused acquisition across paid, organic, and partnerships.",
      icon: "📈",
    },
    {
      title: "Content & Social",
      desc: "Stories that spark engagement and build loyal communities.",
      icon: "💬",
    },
  ];

  return (
    <section
      id={id}
      className="section"
      /* Minimize the top gap so it sits just under the hero transition */
      style={{ paddingTop: 12 }}
    >
      {/* Centered container with width constraint and centered text for headings */}
      <div
        className="container"
        style={{ maxWidth: 1100, marginInline: "auto", textAlign: "center" }}
      >
        <h2 className="section-title" style={{ marginBottom: ".4rem" }}>Services</h2>
        <p className="section-subtitle" style={{ marginBottom: "1.25rem" }}>
          Full-funnel solutions tailored to your goals.
        </p>

        <div
          className="card-grid"
          role="list"
          /* keep grid centered within constrained container */
          style={{ alignItems: "stretch", justifyItems: "stretch" }}
        >
          {services.map((s) => (
            <article
              key={s.title}
              role="listitem"
              className="card"
              style={{ display: "grid", gap: ".5rem", textAlign: "left" }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 44,
                  height: 44,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 12,
                  background: "rgba(59,130,246,.10)",
                  border: "1px solid rgba(59,130,246,.20)",
                  color: "var(--primary)",
                  fontSize: "1.25rem",
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ margin: ".25rem 0" }}>{s.title}</h3>
              <p style={{ color: "var(--muted-text)", margin: 0 }}>{s.desc}</p>
              <div style={{ marginTop: ".5rem" }}>
                <button className="btn btn-secondary">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
