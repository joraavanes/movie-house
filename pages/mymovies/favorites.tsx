import React, { useEffect, useState } from "react";
import MovieList from "../../components/Movie/MovieList";

const favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const localState = window.localStorage.getItem("movie-house-user-profile")!;
    const userProfile = JSON.parse(localState);
    setFavoriteMovies(userProfile.favorites);
  }, []);

  return (
    <>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h3>My Favorites</h3>
          <MovieList movies={favoriteMovies} />
        </div>
      </div>
    </>
  );
};

export default favorites;
