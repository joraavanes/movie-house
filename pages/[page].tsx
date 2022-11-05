import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import MovieList from "../components/Movie/MovieList";
import Pagination from "../components/shared/Pagination";
import { Movie } from "../types";

interface Page {
  movies: Movie[];
  moviesCount: number;
  page: number;
}

const Page: React.FC<Page> = ({ movies, page, moviesCount }) => {
  return (
    <>
      <Head>
        <title>{`Movie House | page ${page}`}</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <MovieList movies={movies}/>
        </div>
        <div className="row mt-5">
          <Pagination itemsCount={moviesCount} currentPage={page} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params?.page);

  const fetch1 = axios.get(
    `https://moviesapi.ir/api/v1/movies?page=${page * 3 - 2}`
  );
  const fetch2 = axios.get(
    `https://moviesapi.ir/api/v1/movies?page=${page * 3 - 1}`
  );
  const fetch3 = axios.get(
    `https://moviesapi.ir/api/v1/movies?page=${page * 3}`
  );

  const res = await Promise.all([fetch1, fetch2, fetch3]);
  const data = res.map((fetchItem) => fetchItem.data.data);

  return {
    props: {
      page,
      movies: [...data[0], ...data[1], ...data[2]],
      moviesCount: res[0].data.metadata.total_count
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  var pagesCount = Array(10)
    .fill(0)
    .map((v, i) => ++i);
  const paths = pagesCount.map((i) => ({
    params: {
      page: i.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Page;
