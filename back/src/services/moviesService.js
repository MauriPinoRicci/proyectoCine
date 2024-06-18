const getMovies = () => {
  return [
    {
      _id: 20,
      title: "Zootopia",
      year: 2016,
      director: "Byron Howard, Rich Moore, Jared Bush",
      duration: "1h 48min",
      genre: ["Animation", "Adventure", "Comedy"],
      rate: 8,
      poster: "https://i.postimg.cc/ydGnBmmY/zootopia.webp",
    },
    {
      _id: 15,
      title: "Guardians of the Galaxy",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster: "https://i.postimg.cc/6QXgjjvX/guardians.webp",
    },
    {
      _id: 3,
      title: "Ted",
      year: 2012,
      director: "Seth MacFarlane",
      duration: "1h 46min",
      genre: ["Comedy", "Fantasy"],
      rate: 6.9,
      poster: "https://i.postimg.cc/qq9mcsqZ/ted.webp",
    },
    {
      _id: 6,
      title: "The figth club",
      year: 1999,
      director: "David Fincher",
      duration: "2h 19min",
      genre: ["Suspense", "Action"],
      rate: 8.1,
      poster: "https://i.postimg.cc/t4C6HPVV/fight-club.webp",
    },
    {
      _id: 27,
      title: "Coco",
      year: 2017,
      director: "Lee Unkrich, Adrian Molina",
      duration: "1h 45min",
      genre: ["Animation", "Adventure", "Family"],
      rate: 8.4,
      poster: "https://i.postimg.cc/wTyZtvMG/coco.webp",
    },
    {
      _id: 30,
      title: "Cómo Entrenar A Tu Dragón",
      year: 2010,
      director: "Dean DeBlois, Chris Sanders",
      duration: "1h 38min",
      genre: ["Animation", "Action", "Adventure"],
      rate: 8.1,
      poster: "https://i.postimg.cc/cC8hJvh7/your-dragon.webp",
    },
  ];
};

module.exports = {
    getMovies
}