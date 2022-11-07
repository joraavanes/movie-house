import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import { Movie } from "../../types";
import {
  favoriteMovieToggle,
  watchLaterToggle,
} from "../../store/slices/userProfileSlice";
import styles from './styles/MoviePreview.module.css';

interface MoviePreview {
  movie: Movie;
}

const MoviePreview: React.FC<MoviePreview> = ({ movie }) => {
  const userProfile = useAppSelector((state) => state.userProfile);
  const dispatch = useAppDispatch();

  const handleFavoriteBtn = (e: React.MouseEvent<HTMLElement>) =>
    dispatch(favoriteMovieToggle({id: movie.id, title: movie.title, poster: movie.poster}));

  const handleWatchLaterBtn = (e: React.MouseEvent<HTMLButtonElement>) =>
    dispatch(watchLaterToggle({id: movie.id, title: movie.title, poster: movie.poster}));

  return (
    <>
      <Head>
        <title>Movie page</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-5">
          <div className="col-xs-12 col-md-6 col-lg-5 col-xl-4 mb-4 order-md-2">
            <Image
              src={movie.poster}
              className="movie-poster"
              width={500}
              height={750}
              alt="..."
            />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-7 col-xl-8 mb-4 order-md-1">
            <div className="row align-items-center">
              <div className="col-10">
                <h2>{movie.title}</h2>
                <b>Director:</b> {movie.director}
              </div>
              <div className="col-2">
                <h4
                  onClick={handleFavoriteBtn}
                  className="text-center h2 pointer-cursor"
                  role="button"
                >
                  {userProfile.favorites.findIndex(m => m.id === movie.id) >= 0 ? (
                    <i className="bi bi-heart-fill"></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}
                </h4>
              </div>
            </div>

            <hr />
            <div>
              <div className={`card mb-3 mt-3 mx-2 d-inline-block float-md-right ${styles.card}`}>
                <div className="card-body">
                  <h5 className="h1 card-title text-center">
                    {movie.metascore}
                  </h5>
                  <p className="display-6 text-center">metascore</p>
                </div>
              </div>
              <div className={`card mb-3 mt-3 mx-1 d-inline-block float-md-right ${styles.card}`}>
                <div className="card-body">
                  <h5 className="h1 card-title text-center">
                    {movie.imdb_rating}
                  </h5>
                  <p className="display-6 text-center">IMDB</p>
                </div>
              </div>

              <p>
                <b>Genres:</b>{" "}
                <em>{movie.genres?.map((genre) => genre).join(", ")}</em>
              </p>

              <p>
                <b>Released:</b> {movie.released}
              </p>
              
              <p>
                <b>Awards:</b> {movie.awards}
              </p>

              <p>
                <b>Actors:</b> {movie.actors}
              </p>

              <p>{movie.plot}</p>

              <button
                className="button button-62"
                onClick={handleWatchLaterBtn}
                role="button"
              >
                {userProfile.watchLater.findIndex(m => m.id === movie.id) >= 0 ? (
                  <i>Gonna watch it</i>
                ) : (
                  <i>Watch later</i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
