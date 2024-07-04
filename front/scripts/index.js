const renderCards = require("./render_cards");
const axios = require("axios");

const main = async () => {
  console.log("Todo está saliendo bien");
  const response = await axios.get("http://localhost:3000/movies");
  renderCards(response.data);
};

document.addEventListener('DOMContentLoaded', () => {
  main();
});
