// Drives the .nav-spotlight glow that follows the actual cursor position
// as it moves across the navbar (see .nav-spotlight in components.css).
export function initNavGlow() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const header = document.querySelector(".header");
  if (!header) return;

  header.addEventListener("mousemove", (e) => {
    const rect = header.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    header.style.setProperty("--mx", `${x}%`);
    header.style.setProperty("--my", `${y}%`);
  });
}
