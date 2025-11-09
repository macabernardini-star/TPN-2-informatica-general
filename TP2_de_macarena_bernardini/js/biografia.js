document.getElementById("menu-btn").addEventListener("click", function() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
document.addEventListener("DOMContentLoaded", () => {

  // ❌ Desactivar animación en celular
  if (window.innerWidth <= 600) return;

  // ✅ Animación SOLO en PC
  const paragraphs = document.querySelectorAll(".typewriter");
  let delay = 0;

  paragraphs.forEach((p) => {
    const text = p.textContent.trim();
    p.textContent = "";
    p.style.opacity = 1;

    setTimeout(() => {
      let index = 0;
      const typing = setInterval(() => {
        p.textContent += text[index];
        index++;
        if (index === text.length) clearInterval(typing);
      }, 40);
    }, delay);

    delay += text.length * 40 + 800;
  });

});
