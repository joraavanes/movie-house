import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Movie } from "../../types";
import MovieList from "../../components/Movie/MovieList";

interface SearchPage {
  movies: Movie[];
}

const SearchPage: React.FC<SearchPage> = ({ movies }) => {
  return <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
    <div className="row mt-4">
      <MovieList movies={movies}/>
    </div>
  </div>
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.query;

  if (!title)
    return {
      props: {
        movies: []
      },
    };

  const res = await axios.get(`https://moviesapi.ir/api/v1/movies?q=${title}`);
  
  return {
    props: {
      movies: res.data.data,
    },
  };
};

export default SearchPage;
