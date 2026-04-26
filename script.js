const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === "dark";
} else {
  body.classList.add("light");
}

// Toggle theme
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
});
