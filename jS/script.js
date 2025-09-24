document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navLinks");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});



