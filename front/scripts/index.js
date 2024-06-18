const renderCards = require("./render_cards");
const axios = require("axios");

const main = async () =>{
    console.log("Esta saliendo todo bien");
    const response = await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
};

main();
