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



// const moviesContainer = document.getElementById("container")

// const renderCards = (data) => {
//     data.forEach((movie) => {

//         const containerCard = document.createElement('div');
//         containerCard.classList.add('card-custom');

//         const titleElement = document.createElement('a');
//         titleElement.classList.add("card-title");
//         titleElement.innerHTML = <span class="strong-text">Título: </span> ${movie.title};

//         const yearElement = document.createElement('p');
//         yearElement.classList.add("card-text");
//         yearElement.innerHTML = <span class="strong-text">Año: </span> ${movie.year};

//         const directorElement = document.createElement('h4');
//         directorElement.classList.add("card-text");
//         directorElement.innerHTML = <span class="strong-text">Director: </span> ${movie.director};

//         const durationElement = document.createElement('p');
//         durationElement.classList.add("card-text");
//         durationElement.innerHTML = <span class="strong-text">Duración: </span> ${movie.duration};

//         const genreElement = document.createElement('p');
//         genreElement.classList.add("card-text");
//         genreElement.innerHTML = <span class="strong-text">Género: </span> ${movie.genre};

//         const rateElement = document.createElement('p');
//         rateElement.classList.add("card-text");
//         rateElement.innerHTML = <span class="strong-text">Puntación: </span> ${movie.rate};

//         const imageElement = document.createElement('img');
//         imageElement.classList.add("card-img");
//         imageElement.src = movie.poster;

//         // Agregamos los elementos al contenedor
//         containerCard.appendChild(titleElement);
//         containerCard.appendChild(imageElement);
//         containerCard.appendChild(yearElement);
//         containerCard.appendChild(directorElement);
//         containerCard.appendChild(durationElement);
//         containerCard.appendChild(genreElement);
//         containerCard.appendChild(rateElement);

//         moviesContainer.appendChild(containerCard);
//     });
// }


// module.exports = renderCards;