export function initTheme(){
  const btn=document.getElementById("theme-toggle");
  if (!btn) return;
  const body=document.body;
  const saved=localStorage.getItem("theme");
  if (saved==="light") body.classList.add("light");
  const updateIcon=()=>btn.textContent=body.classList.contains("light")?"☀️":"🌙";
  updateIcon();
  btn.addEventListener("click",()=>{
    body.classList.toggle("light");
    localStorage.setItem("theme",body.classList.contains("light")?"light":"dark");
    updateIcon();
  });
}
