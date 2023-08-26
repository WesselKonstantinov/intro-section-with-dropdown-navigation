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

const subToggles = document.querySelectorAll(".js-subtoggle");
subToggles.forEach((subToggle) => {
  const subMenu = subToggle.nextElementSibling;

  subToggle.addEventListener("click", () => {
    const isOpen = subToggle.getAttribute("aria-expanded") === "true";
    subToggle.setAttribute("aria-expanded", !isOpen);
    subMenu.hidden = isOpen;
  });
});
