/*
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
*/


document.getElementById("menu-btn").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});


// =======================
// ANIMACIÓN DE ENTRADA
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const pinturas = document.querySelectorAll(".pintura");

  pinturas.forEach((pintura, i) => {
    pintura.style.opacity = "0";
    pintura.style.transform = "translateY(50px)";

    setTimeout(() => {
      pintura.style.transition = "all 1.5s ease";
      pintura.style.opacity = "1";
      pintura.style.transform = "translateY(0)";
    }, i * 300);
  });
});


// =======================
// MÚSICA
// =======================
 const musica = new Audio("audio/llorona.mp3"); // coloca tu archivo en /audio/llorona.mp3
  musica.volume = 0.4; // volumen suave
  musica.loop = true;

  // Reproducir al hacer clic (por políticas del navegador)
  document.body.addEventListener("click", () => {
    if (musica.paused) {
      musica.play().catch(err => console.log(err));
    }
  });


// =======================
// EFECTO DE LUZ (solo PC)
// =======================
function esCelular() {
  return window.innerWidth < 768;
}

if (!esCelular()) {
  const luz = document.createElement("div");
  luz.classList.add("luz-dorada");
  document.body.appendChild(luz);

  document.addEventListener("mousemove", (e) => {
    luz.style.left = e.pageX - 100 + "px";
    luz.style.top = e.pageY - 100 + "px";
  });
}

// =======================
// GALERÍA (LIGHTBOX)
// =======================

// Crear lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

// Botón cerrar
const closeBtn = document.createElement("div");
closeBtn.id = "lightbox-close";
closeBtn.classList.add("lightbox-btn");
closeBtn.textContent = "✕";
lightbox.appendChild(closeBtn);

// Flechas
const prevBtn = document.createElement("div");
prevBtn.id = "lightbox-prev";
prevBtn.classList.add("lightbox-btn");
prevBtn.textContent = "❮";
lightbox.appendChild(prevBtn);

const nextBtn = document.createElement("div");
nextBtn.id = "lightbox-next";
nextBtn.classList.add("lightbox-btn");
nextBtn.textContent = "❯";
lightbox.appendChild(nextBtn);

// Detectar imágenes
const imagenes = Array.from(document.querySelectorAll(".pintura img"));
let imgActual = 0;

// Abrir galería
function abrirGaleria(i) {
  imgActual = i;
  lightboxImg.src = imagenes[i].src;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden"; // bloquea scroll
}

// Cambiar imagen
function cambiarImagen(dir) {
  imgActual += dir;

  if (imgActual < 0) imgActual = imagenes.length - 1;
  if (imgActual >= imagenes.length) imgActual = 0;

  lightboxImg.src = imagenes[imgActual].src;
}

// Activar imágenes
imagenes.forEach((img, i) => {
  img.addEventListener("click", () => abrirGaleria(i));
});

// Funciones seguras para botones (sin doble trigger)
function addSafeEvents(btn, fn) {
  btn.addEventListener("click", fn);
  btn.addEventListener("touchend", (e) => {
    e.preventDefault();
    fn();
  });
}

addSafeEvents(prevBtn, () => cambiarImagen(-1));
addSafeEvents(nextBtn, () => cambiarImagen(1));
addSafeEvents(closeBtn, () => {
  lightbox.style.display = "none";
  document.body.style.overflow = "auto";
});

// Evitar deslizamientos en la imagen pero permitir en botones
lightboxImg.addEventListener("touchmove", (e) => {
  e.preventDefault();
}, { passive: false });
