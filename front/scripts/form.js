console.log("vinculado");

const axios = require("axios");

function enviarFormulario(e) {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  const titulo = document.getElementById("titulo").value.trim();
  const año = document.getElementById("año").value.trim();
  const director = document.getElementById("director").value.trim();
  const duracion = document.getElementById("duracion").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const puntuacion = document.getElementById("puntuacion").value.trim();
  const poster = document.getElementById("poster").value.trim();

  // Validar que todos los campos estén completos
  if (
    titulo === "" ||
    año === "" ||
    director === "" ||
    duracion === "" ||
    genero === "" ||
    puntuacion === "" ||
    poster === ""
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
    poster: poster,
  };

  // Enviar los datos a través de Axios
  axios
    .post("http://localhost:3000/movies", movieData)
    .then((response) => {
      console.log("Película creada:", response.data);

      alert("Película creada correctamente!");
    })
    .catch((error) => {
      console.error("Error al crear película:", error);
      alert(
        "Hubo un error al crear la película. Por favor, intenta nuevamente."
      );
    });
}

document.querySelector("#button").addEventListener("click", ()=>{
  document.querySelector("#formulario").reset()
});

document.querySelector("#submit").addEventListener("click", enviarFormulario);


