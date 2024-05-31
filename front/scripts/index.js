const renderCards = require("./render_cards");

$.get("https://api.1rodemayo.com/movies/", (data) => {
    renderCards(data)
});

