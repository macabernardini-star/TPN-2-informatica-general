document.getElementById("menu-btn").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
// --- ANIMACIÓN DE TARJETAS AL HACER SCROLL ---

document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".tarjeta-museo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  tarjetas.forEach(tarjeta => observer.observe(tarjeta));
});
