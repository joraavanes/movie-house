import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../../types";
import styles from './styles/MovieItem.module.css';

interface MovieItem {
  movie: Movie;
}

const MovieItem: React.FC<MovieItem> = ({ movie }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3">
      <article className={`card box ${styles.movieCard}`}>
        <Link
          href={`/movie/${movie.id}/${movie.title.toLowerCase().replaceAll(' ', '-')}`}
        >
          <Image
            src={movie.poster}
            width={290}
            height={190}
            className={styles.movieItemPhoto}
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h2 className={styles.title} title={movie.title}>
            {movie.title}
          </h2>
          <p>
            {movie?.genres?.map(genre => <span className={styles.badgeSecondary} key={genre}>{genre}</span>)}
          </p>
          <Link
            href={`/movie/${movie.id}/${movie.title.toLowerCase().replaceAll(' ', '-')}`}
            className="btn btn-primary btn-sm button-62"
          >
            Learn more
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MovieItem;
