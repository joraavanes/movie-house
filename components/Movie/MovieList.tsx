import React from "react";
import { Movie } from "../../types";
import MovieItem from "./MovieItem";

interface MovieList {
  movies: Movie[];
}

const MovieList: React.FC<MovieList> = ({ movies }) =>
  movies.length ? (
    <>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </>
  ) : null;

export default MovieList;
