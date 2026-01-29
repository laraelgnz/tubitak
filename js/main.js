document.addEventListener("DOMContentLoaded", () => {
  const lightBtn = document.getElementById("lightBtn");
  const darkBtn = document.getElementById("darkBtn");
  const root = document.documentElement;

  if (!lightBtn || !darkBtn) return;

  function setTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    lightBtn.classList.toggle("active", !isDark);
    darkBtn.classList.toggle("active", isDark);
    localStorage.setItem("theme", theme);
  }

  setTheme(localStorage.getItem("theme") || "light");

  lightBtn.addEventListener("click", () => setTheme("light"));
  darkBtn.addEventListener("click", () => setTheme("dark"));
});
