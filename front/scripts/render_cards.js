const moviesContainer = document.getElementById("container")

const renderCards = (data) => {
    data.forEach((movie) => {

        const containerCard = document.createElement('div');
        containerCard.classList.add('card-custom');

        const titleElement = document.createElement('a');
        titleElement.classList.add("card-title");
        titleElement.innerHTML = `<span class="strong-text">Título: </span> ${movie.title}`;

        const yearElement = document.createElement('p');
        yearElement.classList.add("card-text");
        yearElement.innerHTML = `<span class="strong-text">Año: </span> ${movie.year}`;

        const directorElement = document.createElement('h4');
        directorElement.classList.add("card-text");
        directorElement.innerHTML = `<span class="strong-text">Director: </span> ${movie.director}`;

        const durationElement = document.createElement('p');
        durationElement.classList.add("card-text");
        durationElement.innerHTML = `<span class="strong-text">Duración: </span> ${movie.duration}`;

        const genreElement = document.createElement('p');
        genreElement.classList.add("card-text");
        genreElement.innerHTML = `<span class="strong-text">Género: </span> ${movie.genre}`;

        const rateElement = document.createElement('p');
        rateElement.classList.add("card-text");
        rateElement.innerHTML = `<span class="strong-text">Puntación: </span> ${movie.rate}`;

        const imageElement = document.createElement('img');
        imageElement.classList.add("card-img");
        imageElement.src = movie.poster;

        // Agregamos los elementos al contenedor
        containerCard.appendChild(titleElement);
        containerCard.appendChild(imageElement);
        containerCard.appendChild(yearElement);
        containerCard.appendChild(directorElement);
        containerCard.appendChild(durationElement);
        containerCard.appendChild(genreElement);
        containerCard.appendChild(rateElement);

        moviesContainer.appendChild(containerCard);
    });
}


module.exports = renderCards;