import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import { Movie } from "../../types";
import {
  favoriteMovieToggle,
  watchLaterToggle,
} from "../../store/slices/userProfileSlice";

interface MoviePreview {
  movie: Movie;
}

const MoviePreview: React.FC<MoviePreview> = ({ movie }) => {
  const userProfile = useAppSelector((state) => state.userProfile);
  const dispatch = useAppDispatch();

  const handleFavoriteBtn = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch(favoriteMovieToggle(movie.id));

  const handleWatchLaterBtn = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch(watchLaterToggle(movie.id));

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
              <button
                className="button button-62"
                onClick={handleWatchLaterBtn}
              >
                {userProfile.watchLater.includes(movie.id) ? (
                  <i>Gonna watch it</i>
                ) : (
                  <i>Watch later</i>
                )}
              </button>
              <h4>
                <button onClick={handleFavoriteBtn}>
                  {userProfile.favorites.includes(movie.id) ? (
                    <i className="bi bi-heart-fill"></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}
                </button>
              </h4>
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
