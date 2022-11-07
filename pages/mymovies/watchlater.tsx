import React, { useEffect, useState } from 'react'
import MovieList from '../../components/Movie/MovieList';
import { Movie } from '../../types';

interface State {
  favorites: Movie[];
  watchLater: Movie[];
}

const initialValue: State = {
  favorites: [],
  watchLater: []
}

const WatchLater: React.FC = () => {
  const [userProfile, setUserProfile] = useState(initialValue);
  
  useEffect(() => {
    const localState = localStorage.getItem("movie-house-user-profile");
    if(localState){
      const userProfile = JSON.parse(localState);
      setUserProfile(userProfile);
    }
  }, []);

  return (
    <>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h3>Watch Later</h3>
          <MovieList movies={userProfile.watchLater} />
        </div>
      </div>
    </>
  );
}

export default WatchLater;