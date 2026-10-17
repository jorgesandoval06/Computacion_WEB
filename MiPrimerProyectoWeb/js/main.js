const boton = document.getElementById("btn-tema");

boton.addEventListener("click", function () {
  const oscuro = document.body.classList.toggle("oscuro");
  boton.textContent = oscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
});
