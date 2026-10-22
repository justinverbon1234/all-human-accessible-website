const themeToggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");

/* Theme: CSS owns the default (prefers-color-scheme) and applies dark mode
   via :has() when the checkbox is checked, so this works without JavaScript.
   JS only remembers the choice in localStorage and syncs the checkbox. */
if (storedTheme) {
  document.documentElement.dataset.theme = storedTheme;
  themeToggle.checked = storedTheme === "dark";
}

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";

  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
});

/* Menu and search are native <details> elements: opening, closing, the
   "only one open at a time" behavior and the expanded state are built in.
   JS only adds what HTML does not have: focus for the search input,
   Escape and outside click to close, and keeping the menu open on
   desktop, where its toggle button is hidden. */
const menu = document.querySelector(".site-nav");
const search = document.querySelector(".site-search");
const searchInput = document.querySelector(".site-search input");
const isDesktop = window.matchMedia("(min-width: 768px)");

const syncMenu = ({ matches }) => {
  menu.open = matches;
};

syncMenu(isDesktop);
isDesktop.addEventListener("change", syncMenu);

search.addEventListener("toggle", () => {
  if (search.open) searchInput.focus();
});

menu.querySelector(".main-nav").addEventListener("click", (event) => {
  if (!event.target.closest("a") || isDesktop.matches) return;

  menu.open = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (search.open) {
    search.open = false;
    search.querySelector("summary").focus();
  } else if (menu.open && !isDesktop.matches) {
    menu.open = false;
    menu.querySelector("summary").focus();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".site-header")) return;

  search.open = false;

  if (!isDesktop.matches) menu.open = false;
});