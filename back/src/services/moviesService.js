const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (movieData) => {
    try {
      const movie = await Movie.create(movieData);
      return movie;
    } catch (error) {
      throw new Error("Error creating movie: " + error.message);
    }
  },
};
