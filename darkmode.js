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