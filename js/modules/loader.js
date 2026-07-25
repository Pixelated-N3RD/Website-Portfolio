export function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  const hideLoader = () => loader.classList.add("hide");

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
    setTimeout(hideLoader, 3000);
  }
}
