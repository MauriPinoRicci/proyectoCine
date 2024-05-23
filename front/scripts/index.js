const moviesContainer = document.getElementById("container")

tempData.forEach((movie) => {

    const containerCard = document.createElement('div');
    containerCard.classList.add('card');

    const titleElement = document.createElement('a');
    titleElement.classList.add("card-title");
    titleElement.innerHTML = `<strong>Título :</strong> ${movie.title}`;

    const yearElement = document.createElement('p');
    yearElement.classList.add("card-text");
    yearElement.innerHTML = `<strong>Año :</strong> ${movie.year}`;

    const directorElement = document.createElement('h4');
    directorElement.classList.add("card-text");
    directorElement.innerHTML = `<strong>Director :</strong> ${movie.director}`;


    const durationElement = document.createElement('p');
    durationElement.classList.add("card-text");
    durationElement.innerHTML =  `<strong>Duración :</strong> ${movie.duration}`;

    const genreElement = document.createElement('p');
    genreElement.classList.add("card-text");
    genreElement.innerHTML =`<strong>Género :</strong> ${movie.genre}`;

    const rateElement = document.createElement('p');
    rateElement.classList.add("card-text");
    rateElement.innerHTML = `<strong>Puntuación :</strong> ${movie.rate}`;

    const imageElement = document.createElement('img');
    imageElement.classList.add("card-img");
    imageElement.src = movie.poster;

    // Agregamos los elementos al contenedor
    containerCard.appendChild(titleElement);
    containerCard.appendChild(yearElement);
    containerCard.appendChild(directorElement);
    containerCard.appendChild(durationElement);
    containerCard.appendChild(genreElement);
    containerCard.appendChild(rateElement);
    containerCard.appendChild(imageElement);

    moviesContainer.appendChild(containerCard);
});
