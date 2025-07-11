let menu = document.getElementById("doc-nav");

function openMenu() {
  menu.classList.remove("doc__nav");
  menu.classList.add("doc__nav--open");
}

function closeMenu() {
  menu.classList.remove("doc__nav--open");
  menu.classList.add("doc__nav");
}
