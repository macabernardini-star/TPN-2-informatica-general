// Selecciona todas las tarjetas de técnica
const tecnicas = document.querySelectorAll('.tecnica');

// Función que ilumina una por una
function iluminarSecuencialmente() {
  tecnicas.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('iluminada');
      setTimeout(() => {
        card.classList.remove('iluminada');
      }, 1000); // dura 1 segundo encendida
    }, index * 1200); // aparece una tras otra
  });

  // Repite cada cierto tiempo
  setTimeout(iluminarSecuencialmente, tecnicas.length * 1200 + 2000);
}

// Inicia la animación
iluminarSecuencialmente();