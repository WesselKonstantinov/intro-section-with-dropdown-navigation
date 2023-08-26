const navToggle = document.querySelector(".js-toggle");
navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !isOpen);
});
