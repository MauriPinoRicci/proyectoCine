const renderCards = require("./render_cards");
const axios = require("axios");

const fetchDataAndRenderCards = async () => {
    try {
        const response = await axios.get("https://api.1rodemayo.com/movies/");
        console.log("tamo bien");        
        console.log(response.data);
        const data = response.data;
        renderCards(data); // Llama a la función renderCards con los datos obtenidos de la API
    } catch (error) {
        console.log(error.message);
    }
}

fetchDataAndRenderCards();

//queda pendiente hacer commit de la hw clase 6 (correjir)
