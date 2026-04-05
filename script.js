// 1. SELECCIONAR LOS ELEMENTOS
const loginLink = document.querySelector(".login-link");
const loginModal = document.getElementById("login-modal");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.querySelector(".login-form");

// 2. ABRIR EL MODAL cuando haces clic en "Acceso"
loginLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que recargue la página
  loginModal.style.display = "flex"; // Muestra el modal
});

// 3. CERRAR EL MODAL cuando haces clic en la X
closeBtn.addEventListener("click", function () {
  loginModal.style.display = "none"; // Oculta el modal
});

// 4. CERRAR EL MODAL cuando haces clic FUERA de la caja blanca
window.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// 5. PROCESAR EL LOGIN cuando envías el formulario
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que recargue la página

  // Obtener los valores que escribió el usuario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // VALIDAR que no estén vacíos
  if (email === "" || password === "") {
    alert("Por favor llena todos los campos");
    return;
  }

  // VALIDAR que el email tenga formato correcto
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un email válido");
    return;
  }

  // VALIDAR que la contraseña tenga al menos 6 caracteres
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  // Si pasó todas las validaciones, cerrar el modal
  alert("¡Login exitoso! Bienvenido/a");
  loginModal.style.display = "none";
  loginForm.reset(); // Limpiar el formulario
});
