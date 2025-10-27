document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada (ya existente)
  const pinturas = document.querySelectorAll(".pintura");
  pinturas.forEach((pintura, i) => {
    pintura.style.opacity = 0;
    pintura.style.transform = "translateY(50px)";
    setTimeout(() => {
      pintura.style.transition = "all 1.5s ease";
      pintura.style.opacity = 1;
      pintura.style.transform = "translateY(0)";
    }, i * 300);
  });

  // 🎵 --- Agregar música representativa ---
  const musica = new Audio("audio/llorona.mp3"); // coloca tu archivo en /audio/llorona.mp3
  musica.volume = 0.4; // volumen suave
  musica.loop = true;

  // Reproducir al hacer clic (por políticas del navegador)
  document.body.addEventListener("click", () => {
    if (musica.paused) {
      musica.play().catch(err => console.log(err));
    }
  });

  // 🌞 --- Efecto de luz cálida sobre las pinturas ---
  const luz = document.createElement("div");
  luz.classList.add("luz-dorada");
  document.body.appendChild(luz);

  document.addEventListener("mousemove", (e) => {
    luz.style.left = e.pageX - 100 + "px";
    luz.style.top = e.pageY - 100 + "px";
  });
});
