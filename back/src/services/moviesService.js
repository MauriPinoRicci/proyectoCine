const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (movieData) => {
    try {
      const newMovie = new Movie(movieData);
      await newMovie.save();
      return newMovie;
    } catch (error) {
      throw new Error("Error creating movie: " + error.message);
    }
  },
};
