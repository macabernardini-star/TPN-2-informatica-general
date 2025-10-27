document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");

  // pequeño helper para mostrar mensaje en pantalla (en vez de alert)
  function mostrarConfirmacion(texto) {
    const box = document.createElement("div");
    box.className = "confirm-box";
    box.innerHTML = `<p>${texto}</p><button type="button" id="confirm-ok">Aceptar</button>`;
    document.body.appendChild(box);

    // estilo básico (si querés moverlo a CSS, preferible)
    Object.assign(box.style, {
      position: "fixed",
      left: "50%",
      top: "20%",
      transform: "translateX(-50%)",
      background: "rgba(255,255,255,0.95)",
      padding: "18px 22px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      zIndex: 9999,
      textAlign: "center"
    });

    const btn = document.getElementById("confirm-ok");
    btn.style.marginTop = "10px";
    btn.style.padding = "8px 14px";
    btn.style.border = "none";
    btn.style.background = "#8b1e3f";
    btn.style.color = "#fff";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", () => {
      box.remove();
    });

    // quitar automáticamente a los 6s
    setTimeout(() => {
      if (document.body.contains(box)) box.remove();
    }, 6000);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    // Validación básica del correo
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regexEmail.test(email)) {
      alert("Por favor, ingresá un correo electrónico válido.");
      return;
    }

    // Simulación de envío (aquí podrías hacer fetch a un endpoint si lo tuvieras)
    mostrarConfirmacion(`Gracias, ${nombre}! Tu mensaje fue enviado con éxito 💌`);

    // Limpiar formulario
    form.reset();
  });
});
