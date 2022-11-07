import React, { useEffect, useState } from 'react'
import MovieList from '../../components/Movie/MovieList';

const WatchLater = () => {
  const [favoriteMovies, setWatchLater] = useState([]);

  useEffect(() => {
    const localState = window.localStorage.getItem("movie-house-user-profile")!;
    const userProfile = JSON.parse(localState);
    setWatchLater(userProfile.watchLater);
  }, []);

  return (
    <>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h3>Watch Later</h3>
          <MovieList movies={favoriteMovies} />
        </div>
      </div>
    </>
  );
}

export default WatchLater;