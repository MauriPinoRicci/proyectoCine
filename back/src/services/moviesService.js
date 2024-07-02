const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  postMovies: async (movieData) => {
    try {
      const newMovie = new Movie(movieData);
      const savedMovie = await newMovie.save();
      return savedMovie;
    } catch (error) {
      throw new Error(error.message); // Lanza un error para ser manejado por el controlador
    }
  },
};
