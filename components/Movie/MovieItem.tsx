import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../../types";

interface MovieItem {
  movie: Movie;
}

const MovieItem: React.FC<MovieItem> = ({ movie }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3">
      <article className="card movie-card">
        <Image
          src={movie.poster}
          width={290}
          height={190}
          className="card-Image-top"
          alt="..."
        />
        <div className="card-body">
          <h2 className="h5" title={movie.title}>
            {movie.title}
          </h2>
          <p className="card-text">{movie.plot}</p>
          <Link
            href={`/movie/${movie.id}`}
            className="btn btn-primary btn-sm button-62"
          >
            Check out
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MovieItem;
