const navToggle = document.querySelector(".js-toggle");
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !isOpen);
});

const nav = document.querySelector(".js-nav");
nav.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    navToggle.setAttribute("aria-expanded", false);
  }
});
