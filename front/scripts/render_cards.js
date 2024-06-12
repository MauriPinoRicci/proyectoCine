const fs = require('fs');

const renderCards = (data) => {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Películas</title>
            <link rel="stylesheet" href="styles.css"> // Incluir los estilos CSS aquí
        </head>
        <body>
            <div id="container">
    `;

    data.forEach((movie) => {
        html += `
            <div class="card-custom">
                <a class="card-title"><span class="strong-text">Título: </span> ${movie.title}</a>
                <img class="card-img" src="${movie.poster}">
                <p class="card-text"><span class="strong-text">Año: </span> ${movie.year}</p>
                <h4 class="card-text"><span class="strong-text">Director: </span> ${movie.director}</h4>
                <p class="card-text"><span class="strong-text">Duración: </span> ${movie.duration}</p>
                <p class="card-text"><span class="strong-text">Género: </span> ${movie.genre}</p>
                <p class="card-text"><span class="strong-text">Puntación: </span> ${movie.rate}</p>
            </div>
        `;
    });

    html += `
            </div>
        </body>
        </html>
    `;

    // Guardar el HTML generado en un archivo
    fs.writeFileSync('movies.html', html);
}

module.exports = renderCards;
