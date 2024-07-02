const axios = require('axios');
import renderCards from "../scripts/render_cards";

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  document.getElementById("formulario").reset();
}

// Función para enviar el formulario y manejar el evento de envío
function enviarFormulario(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  const titulo = document.getElementById("titulo").value.trim();
  const año = document.getElementById("año").value.trim();
  const director = document.getElementById("director").value.trim();
  const duracion = document.getElementById("duracion").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const puntuacion = document.getElementById("puntuacion").value.trim();

  // Validar que todos los campos estén completos
  if (
    titulo === "" ||
    año === "" ||
    director === "" ||
    duracion === "" ||
    genero === "" ||
    puntuacion === ""
  ) {
    alert("Por favor, completa todos los campos."); // Mostrar mensaje de error
    return;
  }

  // Crear objeto con los datos de la película
  const movieData = {
    title: titulo,
    year: año,
    director: director,
    duration: duracion,
    genre: genero.split(",").map((g) => g.trim()), // Convertir géneros a un array
    rate: parseFloat(puntuacion),
    poster: "", // Aquí puedes agregar la URL del póster si tienes esa funcionalidad
  };

  // Enviar los datos a través de Axios
  axios
    .post("/movies", movieData)
    .then((response) => {
      // Aquí puedes manejar la respuesta del servidor si es necesario
      console.log("Película creada:", response.data);

      // Limpiar el formulario después de enviar con éxito
      limpiarFormulario();

      // Mostrar un mensaje de éxito
      alert("Película creada correctamente!");

      // Actualizar la interfaz para mostrar la nueva película creada
      renderCards(response.data);
    })
    .catch((error) => {
      console.error("Error al crear película:", error);
      alert(
        "Hubo un error al crear la película. Por favor, intenta nuevamente."
      );
    });
}
