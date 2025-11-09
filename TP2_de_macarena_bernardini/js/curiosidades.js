document.getElementById("menu-btn").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cantidadFlores = 30; // 🌼 más flores
  const flores = ["🌸", "🌺", "🌼", "🌻", "💮"];

  for (let i = 0; i < cantidadFlores; i++) crearFlor();

  function crearFlor() {
    const flor = document.createElement("span");
    flor.classList.add("flor-fondo");
    flor.textContent = flores[Math.floor(Math.random() * flores.length)];
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = Math.random() * 100 + "vh";
    flor.style.fontSize = 18 + Math.random() * 25 + "px";
    flor.style.animationDuration = 15 + Math.random() * 15 + "s";
    flor.style.animationDelay = Math.random() * 10 + "s";
    flor.style.opacity = 0.15 + Math.random() * 0.25; // más sutil

    document.body.appendChild(flor);
  }
});
