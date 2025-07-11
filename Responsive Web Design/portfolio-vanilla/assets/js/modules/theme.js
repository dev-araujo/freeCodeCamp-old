export function initTheme() {
  let theme = localStorage.getItem("theme") || "light";
  const iconTheme = document.getElementById("icon-theme");
  const body = document.querySelector("body");

  function applyTheme(theme) {
    if (theme === "dark") {
      iconTheme.classList.replace("bx-sun", "bx-moon");
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      iconTheme.classList.replace("bx-moon", "bx-sun");
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }

  function changeTheme() {
    theme = theme === "light" ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }

  applyTheme(theme);
  document.getElementById("iconTheme").addEventListener("click", changeTheme);
}
