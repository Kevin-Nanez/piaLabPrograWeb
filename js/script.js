




                        // Modal
var openModalButton = document.getElementById("openModal");

// Obtener el modal y su contenido
var modal = document.getElementById("modal");
var modalContent = document.querySelector(".modal-content");

// Obtener el botón para continuar
var continueButton = document.getElementById("continueButton");

// Agregar un evento de click al botón para abrir el modal
openModalButton.addEventListener("click", function() {
  // Mostrar el modal
  event.preventDefault();
  modal.style.display = "block";
});

// Agregar un evento de click al botón de continuar
continueButton.addEventListener("click", function() {
  // Redireccionar al usuario a otra página
  window.open("https://instagram.com/knrnzz?igshid=ZDdkNTZiNTM=", "_blank");
  modal.style.display = "none";
});

// Agregar un evento de click a la ventana para cerrar el modal
window.addEventListener("click", function(event) {
  // Si el usuario hace clic fuera del modal, cerrarlo
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
