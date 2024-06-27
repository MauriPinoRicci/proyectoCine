const moviesService = require("../services/moviesService");

module.exports = {
  getMovies: async (req, res) => {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  },
};
