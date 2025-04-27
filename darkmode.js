const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambia el texto del botón según el modo
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Modo Claro";
  } else {
    toggleButton.textContent = "🌙 Modo Oscuro";
  }
});


// animacion para las tarjetas
let posicion = 0;

function moverCarrusel(direccion) {
  const track = document.querySelector('.carousel-track');
  const totalCards = document.querySelectorAll('.carousel-track .card').length;

  if (direccion === 1) {
    // Botón derecha
    posicion++;
    if (posicion >= totalCards) {
      posicion = 0; // vuelve al inicio
    }
  } else if (direccion === -1) {
    // Botón izquierda
    posicion--;
    if (posicion < 0) {
      posicion = totalCards - 1; // va al final
    }
  }

  const desplazamiento = -(posicion * 100);
  track.style.transform = `translateX(${desplazamiento}%)`;
}
