function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}



