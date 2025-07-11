/*===== MENU SHOW =====*/
export function initMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}

/*===== ACTIVE AND REMOVE MENU =====*/
export function initActiveLink(navLinkClass) {
  const navLinks = document.querySelectorAll(navLinkClass);

  function linkAction() {
    navLinks.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }

  navLinks.forEach((n) => n.addEventListener("click", linkAction));
}
