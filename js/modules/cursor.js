export function initCursor(){

    // Skip entirely on touch/coarse-pointer devices — there's no mouse to track
    if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches){
        return;
    }

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    if(!cursor || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Trailing ring — eases toward the real cursor position each frame
    function animateRing(){
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Grow the ring on hoverable elements
    const hoverTargets = "a, button, .card, .btn, input, textarea, [role='button']";

    document.addEventListener("mouseover", (e)=>{
        if(e.target.closest(hoverTargets)){
            ring.classList.add("cursor-hover");
            cursor.classList.add("cursor-hover");
        }

        // The terminal is always a dark surface, even in light mode —
        // force the cursor white there so it doesn't disappear
        if(e.target.closest(".terminal")){
            ring.classList.add("cursor-invert");
            cursor.classList.add("cursor-invert");
        }
    });

    document.addEventListener("mouseout", (e)=>{
        if(e.target.closest(hoverTargets)){
            ring.classList.remove("cursor-hover");
            cursor.classList.remove("cursor-hover");
        }

        if(e.target.closest(".terminal")){
            ring.classList.remove("cursor-invert");
            cursor.classList.remove("cursor-invert");
        }
    });

    // Hide while the pointer leaves the window
    document.addEventListener("mouseleave", ()=>{
        cursor.style.opacity = "0";
        ring.style.opacity = "0";
    });

    document.addEventListener("mouseenter", ()=>{
        cursor.style.opacity = "1";
        ring.style.opacity = "1";
    });
}
