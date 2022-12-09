import { IOmdbResponse } from "../../src/ts/models/IOmdbResponse";

export const mockData: IOmdbResponse = {
  Search: [
    {
      Title: "Star Wars IV",

      imdbID: "tt0076759",

      Type: "movie",

      Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",

      Year: "1977",
    },

    {
      Title: "The Lord of the Rings",

      imdbID: "tt0120737",

      Type: "movie",

      Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

      Year: "2001",
    },

    {
      Title: "Harry Potter III",

      imdbID: "tt1201607",

      Type: "movie",

      Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

      Year: "2001",
    },
  ],
};

export const failData: IOmdbResponse = {
  Search: [   
  ]
};

