const moviesService = require("../services/moviesService");

exports.getMovies = (req, res) => {
  const movies = moviesService.getMovies();
  res.json(movies);
};
