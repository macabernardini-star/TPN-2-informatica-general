document.addEventListener("DOMContentLoaded", () => {
  // --- ANIMACIÓN DE ENTRADA DESDE ARRIBA ---
  const secciones = document.querySelectorAll(".familia-section");

  secciones.forEach((sec, i) => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(-50px)";
    setTimeout(() => {
      sec.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, i * 300);
  });

  // --- FONDO ANIMADO ESTILO "AURA AZUL" ---
  const canvas = document.createElement("canvas");
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const luces = [];
  const colores = [
    "rgba(0, 150, 255, 0.06)", // azul claro
    "rgba(50, 0, 200, 0.08)",  // violeta
    "rgba(0, 255, 255, 0.05)", // celeste
    "rgba(100, 80, 200, 0.07)" // lavanda
  ];

  for (let i = 0; i < 50; i++) {
    luces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 150 + 60,
      c: colores[Math.floor(Math.random() * colores.length)],
      s: Math.random() * 0.5 + 0.2,
    });
  }

  function animarFondo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    luces.forEach((l) => {
      const grad = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r);
      grad.addColorStop(0, l.c);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(l.x, l.y, l.r, 0, Math.PI * 2);
      ctx.fill();

      l.y += l.s;
      if (l.y - l.r > canvas.height) {
        l.y = -l.r;
        l.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animarFondo);
  }

  // --- Estilos del fondo ---
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "-1";
  canvas.style.pointerEvents = "none";

  animarFondo();
});
