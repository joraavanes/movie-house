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
  genreTitle: string;
  moviesCount: number;
  page: number;
}

const SearchPage: React.FC<SearchPage> = ({
  movies,
  title,
  genre,
  genreTitle,
  moviesCount,
  page,
}) => {
  const pageTitle = `Looking for \"${title || genreTitle}\" | Movie House`;

  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <h3>
            Looking for{" "}
            <span className="badge badge-info">{title || genreTitle}</span>
          </h3>
          <MovieList movies={movies} />
        </div>

        <div className="row mt-5">
          <Pagination
            itemsCount={moviesCount}
            itemsCountPerPage={10}
            currentPage={page}
            url={`search?genre=${genre}&genreTitle=${genreTitle}&page=`}
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title = "", genre = "", genreTitle = "", page = 1 } = context.query;

  if (!title && !genre)
    return {
      props: {
        movies: [],
      },
    };

  let endpoint;
  if (title) 
    endpoint = `${process.env.API_BASE_URL}/api/v1/movies?q=${title}`;
  else 
    endpoint = `${process.env.API_BASE_URL}/api/v1/genres/${genre}/movies?page=${page}`;

  const res = await axios.get(endpoint);

  return {
    props: {
      movies: res.data.data,
      moviesCount: res.data.metadata.total_count,
      title,
      genre,
      genreTitle,
      page,
    },
  };
};

export default SearchPage;
