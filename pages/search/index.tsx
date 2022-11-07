import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Movie } from "../../types";
import MovieList from "../../components/Movie/MovieList";
import Head from "next/head";
import Pagination from "../../components/shared/Pagination";

interface SearchPage {
  movies: Movie[];
  title: string;
  genre: string;
  moviesCount: number;
  page: number;
}

const SearchPage: React.FC<SearchPage> = ({ movies, title, genre, moviesCount, page }) => {
  return (
    <>
      <Head>
        <title>Searching for &quot;{title}&quot; | Movie House</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h3>Searching for{' '}
            <span className="badge badge-info">{title}</span>
          </h3>
          <MovieList movies={movies} />
        </div>

        <div className="row mt-5">
          <Pagination 
            itemsCount={moviesCount} 
            itemsCountPerPage={10}
            currentPage={page} 
            url={`search?genre=${genre}&page=`}
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title = '', genre = '', page = 1 } = context.query;

  if (!title && !genre)
    return {
      props: {
        movies: [],
      },
    };

  let res;
  if(title)
    res = await axios.get(`https://moviesapi.ir/api/v1/movies?q=${title}`);
  else 
    res = await axios.get(`https://moviesapi.ir/api/v1/genres/${genre}/movies?page=${page}`);

  return {
    props: {
      movies: res.data.data,
      moviesCount: res.data.metadata.total_count,
      title,
      genre,
      page
    },
  };
};

export default SearchPage;
