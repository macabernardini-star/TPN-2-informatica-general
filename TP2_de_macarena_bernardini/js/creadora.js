// --- MARIPOSAS EMOJI INTERACTIVAS ---
// Aparecen al tocar o hacer clic, representando la libertad y creatividad de Frida

function crearMariposaEmoji(x, y) {
  const mariposa = document.createElement('span');
  mariposa.textContent = '🦋';
  mariposa.classList.add('mariposa-emoji');

  mariposa.style.left = x + 'px';
  mariposa.style.top = y + 'px';
  document.body.appendChild(mariposa);

  const duracion = 5000 + Math.random() * 3000;
  const desplazamientoX = (Math.random() - 0.5) * 200;

  mariposa.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${desplazamientoX}px, -200px) scale(1.3)`, opacity: 0 }
  ], {
    duration: duracion,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  setTimeout(() => mariposa.remove(), duracion);
}

// --- Detectar toque o clic ---
function liberarMariposa(event) {
  // Coordenadas para mouse o toque
  const x = event.touches ? event.touches[0].clientX : event.clientX;
  const y = event.touches ? event.touches[0].clientY : event.clientY;

  // Crear varias mariposas por toque
  for (let i = 0; i < 3; i++) {
    setTimeout(() => crearMariposaEmoji(x + Math.random() * 40 - 20, y + Math.random() * 40 - 20), i * 150);
  }
}

document.addEventListener('click', liberarMariposa);
document.addEventListener('touchstart', liberarMariposa);
