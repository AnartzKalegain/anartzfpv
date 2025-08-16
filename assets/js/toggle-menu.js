document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-mobile");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});