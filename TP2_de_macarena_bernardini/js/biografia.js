document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".typewriter");
  let delay = 0;

  paragraphs.forEach((p, i) => {
    const text = p.textContent.trim();
    p.textContent = ""; // vacía el texto
    p.style.opacity = 1;

    setTimeout(() => {
      let index = 0;
      const typing = setInterval(() => {
        p.textContent += text[index];
        index++;
        if (index === text.length) clearInterval(typing);
      }, 40); // velocidad de escritura (ajustala: 30 más rápido, 60 más lento)
    }, delay);

    delay += text.length * 40 + 800; // espera hasta que termine antes de empezar el siguiente
  });
});
