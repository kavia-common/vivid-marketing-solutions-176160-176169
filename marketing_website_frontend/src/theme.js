//
// Ocean Professional theme tokens and helpers
//

// PUBLIC_INTERFACE
export const theme = {
  name: "Ocean Professional",
  colors: {
    primary: "#3b82f6",
    secondary: "#64748b",
    success: "#06b6d4",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827",
    mutedText: "rgba(17,24,39,.7)",
    outline: "rgba(59,130,246,.5)",
  },
  gradient: {
    heroBg:
      "radial-gradient(1200px 500px at 10% -10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(600px 300px at 90% 0%, rgba(6,182,212,0.08), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,.05)",
    md: "0 10px 20px rgba(17,24,39,.08)",
    lg: "0 20px 40px rgba(17,24,39,.10)",
  },
  container: {
    maxWidth: "1200px",
    paddingX: "1.25rem",
  },
};

// PUBLIC_INTERFACE
export const sections = {
  home: "home",
  services: "services",
  testimonials: "testimonials",
  contact: "contact",
};

// PUBLIC_INTERFACE
export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72; // account for sticky navbar
  window.scrollTo({ top: y, behavior: "smooth" });
};
