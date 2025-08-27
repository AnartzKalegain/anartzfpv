document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".js-only").style.display = "block";
  document.querySelector(".no-js").style.display = "none";
  document.getElementById("year").textContent = new Date().getFullYear();
});