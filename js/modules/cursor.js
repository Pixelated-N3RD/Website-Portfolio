export function initCursor(){
  const cursor=document.getElementById("cursor");
  const ring=document.getElementById("cursor-ring");
  if (!cursor||!ring) return;
  let mouseX=0,mouseY=0,ringX=0,ringY=0,rafId=null;

  function animateRing(){
    ringX+=(mouseX-ringX)*0.15;
    ringY+=(mouseY-ringY)*0.15;
    ring.style.transform=`translate(${ringX}px,${ringY}px) translate(-50%,-50%)`;
    rafId=requestAnimationFrame(animateRing);
  }
  rafId=requestAnimationFrame(animateRing);

  const hoverTargets="a, button, .card, .btn, input, textarea, [role='button']";

  document.addEventListener("mousemove",(e)=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
    cursor.style.transform=`translate(${mouseX}px,${mouseY}px) translate(-50%,-50%)`;
  });

  document.addEventListener("mouseover",(e)=>{
    if (e.target.closest(hoverTargets)){
      ring.classList.add("cursor-hover");
      cursor.classList.add("cursor-hover");
    }
    if (e.target.closest(".terminal")){
      ring.classList.add("cursor-invert");
      cursor.classList.add("cursor-invert");
    }
  });

  document.addEventListener("mouseout",(e)=>{
    if (e.target.closest(hoverTargets)){
      ring.classList.remove("cursor-hover");
      cursor.classList.remove("cursor-hover");
    }
    if (e.target.closest(".terminal")){
      ring.classList.remove("cursor-invert");
      cursor.classList.remove("cursor-invert");
    }
  });

  document.addEventListener("mouseleave",()=>{
    cursor.style.opacity="0";
    ring.style.opacity="0";
  });

  document.addEventListener("mouseenter",()=>{
    cursor.style.opacity="1";
    ring.style.opacity="1";
  });

  document.addEventListener("touchstart",()=>{
    cursor.style.opacity="0";
    ring.style.opacity="0";
  },{passive:true});

  const mql=window.matchMedia("(prefers-reduced-motion: reduce)");
  const handleReducedMotion=(e)=>{
    if (e.matches&&rafId){
      cancelAnimationFrame(rafId);
      rafId=null;
    }else if(!e.matches&&!rafId){
      rafId=requestAnimationFrame(animateRing);
    }
  };
  mql.addEventListener?mql.addEventListener("change",handleReducedMotion):mql.addListener(handleReducedMotion);
}
