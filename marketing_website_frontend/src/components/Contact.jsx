import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Contact section with simple form and validation.
 * Props:
 * - id: string for section anchor
 */
export default function Contact({ id }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Enter a valid email address.";
    if (!values.message.trim()) e.message = "Please include a brief message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (ev) => {
    setValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      alert("Thanks! We'll be in touch shortly.");
    }, 50);
  };

  return (
    <section id={id} className="section container">
      <h2 className="section-title">Get in touch</h2>
      <p className="section-subtitle">
        Tell us about your goals—let’s build something remarkable.
      </p>

      <form
        onSubmit={onSubmit}
        noValidate
        style={{
          display: "grid",
          gap: "1rem",
          background: "var(--surface)",
          border: "1px solid rgba(17,24,39,.06)",
          borderRadius: "16px",
          boxShadow: "var(--shadow-sm)",
          padding: "1.25rem",
          maxWidth: 720,
        }}
        aria-describedby="contact-help"
      >
        <p id="contact-help" className="visually-hidden">
          All fields are required. We’ll respond within 1–2 business days.
        </p>

        <div style={{ display: "grid", gap: ".35rem" }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-err" : undefined}
            style={inputStyle(errors.name)}
            placeholder="Jane Doe"
          />
          {errors.name && (
            <span id="name-err" style={errorStyle()}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ display: "grid", gap: ".35rem" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-err" : undefined}
            style={inputStyle(errors.email)}
            placeholder="jane@company.com"
          />
          {errors.email && (
            <span id="email-err" style={errorStyle()}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ display: "grid", gap: ".35rem" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-err" : undefined}
            style={inputStyle(errors.message, true)}
            placeholder="How can we help?"
          />
          {errors.message && (
            <span id="message-err" style={errorStyle()}>
              {errors.message}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          {submitted && (
            <span role="status" aria-live="polite" style={{ color: "var(--muted-text)" }}>
              Submitted!
            </span>
          )}
        </div>
      </form>
    </section>
  );
}

function inputStyle(hasError, isTextarea = false) {
  return {
    borderRadius: 12,
    border: `1px solid ${hasError ? "rgba(239,68,68,.6)" : "rgba(17,24,39,.12)"}`,
    padding: ".75rem .9rem",
    fontSize: "1rem",
    outline: "none",
    resize: isTextarea ? "vertical" : "none",
    boxShadow: "var(--shadow-sm)",
  };
}

function errorStyle() {
  return { color: "var(--error)", fontSize: ".9rem" };
}
