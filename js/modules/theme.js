export function initTheme(){

const btn=document.getElementById("theme-toggle");

const body=document.body;

btn.addEventListener("click",()=>{

body.classList.toggle("light");

btn.textContent=

body.classList.contains("light")

? "☀️"

: "🌙";

});

}