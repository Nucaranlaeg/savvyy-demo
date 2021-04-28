export type Movie = {
  title: string;
  imdb_rating: number;
  overview: string;
  released_on: Date;
  length: string;
  director: string;
  cast: Array<string>;
  genres: Array<string>;
  id: string;
  backdrop: string;
  poster: string;
};