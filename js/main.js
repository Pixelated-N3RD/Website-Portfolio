import { initLoader } from "./modules/loader.js";
import { initTheme } from "./modules/theme.js";
import { initRoles } from "./modules/typewriter.js";
import { initCursor } from "./modules/cursor.js";
import { initNavGlow } from "./modules/navGlow.js";

window.addEventListener("DOMContentLoaded",()=>{

    initLoader();

    initTheme();

    initRoles();

    initCursor();

    initNavGlow();

});
