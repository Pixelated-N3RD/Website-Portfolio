const roles = [
  "I design and develop immersive web experiences",
  "Three.js, WebGL, Python, JavaScript, React, Node.js",
  "M.S. Information Technology Management",
  "Cybersecurity",
  "Healthcare bioinformatics",
];

let current = 0;
let intervalId = null;

function rotateRole() {
  const text = document.getElementById("role-text");
  if (!text) return;

  current = (current + 1) % roles.length;

  text.animate([
    { opacity: 0, transform: "translateY(20px)" },
    { opacity: 1, transform: "translateY(0)" }
  ], { duration: 500, fill: "forwards" });

  text.textContent = roles[current];
}

export function initRoles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  rotateRole();
  intervalId = setInterval(rotateRole, 2500);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(intervalId);
      intervalId = null;
    } else if (!intervalId) {
      intervalId = setInterval(rotateRole, 2500);
    }
  });
}
