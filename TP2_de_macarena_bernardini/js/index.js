document.addEventListener("DOMContentLoaded", () => {
  const imagenFrida = document.querySelector(".biografia-imagen img");

  // Estado inicial: más arriba y transparente
  imagenFrida.style.transform = "translateY(-200px)";
  imagenFrida.style.opacity = "0";
  imagenFrida.style.transition = "transform 2.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.8s ease";

  // Espera un poco antes de comenzar
  setTimeout(() => {
    imagenFrida.style.transform = "translateY(0)";
    imagenFrida.style.opacity = "1";
  }, 600);
});
