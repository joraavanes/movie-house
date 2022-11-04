import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Movie } from "../../types";

interface MoviePreview {
  movie: Movie;
}

const MoviePreview: React.FC<MoviePreview> = ({ movie }) => {
  return (
    <>
      <Head>
        <title>Movie page</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-5">
          <div className="col-xs-12 col-md-8 mb-4">
            <h2>{movie.title}</h2>
            <b>Director:</b> {movie.director}
            <span></span>
            <hr />
            <div>
              <p>
                <b>Genres:</b>{" "}
                <em>{movie.genres.map((genre) => genre).join(", ")}</em>
              </p>
              <p>
                <b>Released:</b> {movie.released}
              </p>
              <p>{movie.plot}</p>
              <button className="button button-62">Watch later</button>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 mb-4">
            <Image
              src={movie.poster}
              className="movie-poster"
              width={500}
              height={750}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
