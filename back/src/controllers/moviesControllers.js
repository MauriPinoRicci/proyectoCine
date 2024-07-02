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

  postMovies: async (req, res, next) => {
    try {
      // Verifica si req.body está definido y contiene los datos esperados
      if (!req.body || !req.body.title || !req.body.year || !req.body.director || !req.body.duration || !req.body.rate || !req.body.genre || !req.body.poster) {
        return res.status(400).json({ error: 'Faltan datos en el cuerpo de la solicitud.' });
      }

      const { title, year, director, duration, rate, genre, poster } = req.body;

      const nuevaPelicula = await moviesService.postMovies({
        title,
        year,
        director,
        duration,
        rate,
        genre,
        poster,
      });

      res.status(201).json({
        message: "Película creada correctamente",
        pelicula: nuevaPelicula,
      });
    } catch (error) {
      next(error); // Pasar el error al siguiente middleware de manejo de errores
    }
  },
};
