const moviesService = require("../services/moviesService");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores
    }
  },

  createMovie: async (req, res, next) => {
    try {
      const { title, year, director, duration, rate, genre, poster } = req.body;

      const movieData ={ title, year, director, duration, rate, genre, poster };

      const newMovie = await moviesService.createMovie(movieData);

      res.status(201).json({
        message: "Película creada correctamente",
        pelicula: newMovie,
      });
    } catch (error) {
      next(error); // Pasar el error al siguiente middleware de manejo de errores
    }
  },
};
