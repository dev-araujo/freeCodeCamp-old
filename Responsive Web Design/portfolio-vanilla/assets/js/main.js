import { initActiveLink, initMenu } from "./modules/menu.js";

import { initExperience } from "./modules/experience.js";
import { initScrollReveal } from "./modules/scroll.js";
import { initTheme } from "./modules/theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu("nav-toggle", "nav-menu");
  initActiveLink(".nav__link");
  initTheme();
  initExperience();
  if (window.ScrollReveal) {
    initScrollReveal(window.ScrollReveal);
  }
});
