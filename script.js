document.documentElement.classList.replace("no-js", "js");

const themeToggle = document.querySelector(".theme-toggle");
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const searchToggle = document.querySelector(".search-toggle");
const nav = document.querySelector(".main-nav");
const searchInput = document.querySelector(".site-search input");
const isDesktop = window.matchMedia("(min-width: 768px)");
const storedTheme = localStorage.getItem("theme");

const isOpen = (name) => header.classList.contains(name);

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".visually-hidden").textContent = isDark
    ? "Lichte modus"
    : "Donkere modus";
  themeToggle.querySelector("[aria-hidden]").textContent = isDark ? "☀" : "☾";
}

setTheme(storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  setTheme(theme);
  localStorage.setItem("theme", theme);
});

function setMenu(open) {
  header.classList.toggle("is-menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

function setSearch(open) {
  header.classList.toggle("is-search-open", open);
  searchToggle.setAttribute("aria-expanded", String(open));

  if (open) searchInput.focus();
}

menuToggle.addEventListener("click", () => {
  const open = !isOpen("is-menu-open");

  setSearch(false);
  setMenu(open);

  if (open) nav.querySelector("a").focus();
});

searchToggle.addEventListener("click", () => {
  const open = !isOpen("is-search-open");

  setMenu(false);
  setSearch(open);
});

nav.addEventListener("click", () => {
  const wasOpen = isOpen("is-menu-open");

  setMenu(false);

  if (wasOpen) menuToggle.focus();
});

document.addEventListener("click", (event) => {
  if (header.contains(event.target)) return;

  setMenu(false);
  setSearch(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (isOpen("is-search-open")) {
    setSearch(false);
    searchToggle.focus();
  } else if (isOpen("is-menu-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

isDesktop.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});