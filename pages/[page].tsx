import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "../components/shared/Pagination";
import { Movie } from "../types";

interface Page {
  movies: Movie[];
  page: number;
}

const Page: React.FC<Page> = ({movies, page}) => {
  return <>
    <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
      <div className="row mt-4">
        {movies.length ? movies.map(movie => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 mt-3">
            <article className="card movie-card">
              <Image src={movie.poster} width={290} height={190} className="card-Image-top" alt="..." />
              <div className="card-body">
                <h2 className="h5" title={movie.title}>{movie.title}</h2>
                <p className="card-text">{movie.plot}</p>
                <Link href={`/movie/${movie.id}`} className="btn btn-primary btn-sm button-62">
                  Check out
                </Link>
              </div>
            </article>
          </div>
        )) : null}

      </div>
        <div className="row mt-5">
          <Pagination itemsCount={250} currentPage={page}/>
        </div>
      </div>
  </>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params?.page);

  const fetch1 = axios.get(`https://moviesapi.ir/api/v1/movies?page=${(page*3)-2}`);
  const fetch2 = axios.get(`https://moviesapi.ir/api/v1/movies?page=${(page*3)-1}`);
  const fetch3 = axios.get(`https://moviesapi.ir/api/v1/movies?page=${page*3}`);

  const res = await Promise.all([fetch1, fetch2, fetch3]);
  const data = res.map((fetchItem) => fetchItem.data.data);

  return {
    props: {
      page,
      movies: [...data[0], ...data[1], ...data[2]],
    },
  };
};

export const getStaticPaths: GetStaticPaths = () =>  {
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
}

export default Page;
