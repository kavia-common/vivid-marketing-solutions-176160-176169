//
// Small utilities for scrolling and focus management
//

// PUBLIC_INTERFACE
export function focusAndScrollIntoView(el) {
  if (!el) return;
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    el.removeAttribute("tabindex");
  }, 1000);
}
