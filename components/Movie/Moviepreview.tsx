import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface MoviePreview {
  id: number;
  title: string;
  poster: string;
  released: string;
  director: string;
  metascore: string;
  genres: string[];
  plot: string;
  year: string;
}

const MoviePreview: React.FC<MoviePreview> = ({
  id,
  title,
  poster,
  plot,
  genres,
  director,
  released
}) => {
  return (
    <>
      <Head>
        <title>Movie page</title>
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-5">
          <div className="col-xs-12 col-md-8 mb-4">
            <h2>{title}</h2>
            <b>Director:</b> {director}
            <span></span>
            <hr />
            <div>
              <p>
                <b>Genres:</b>{" "}
                <em>{genres.map((genre) => genre).join(", ")}</em>
              </p>
              <p>
                <b>Released:</b> {released}
              </p>
              <p>{plot}</p>
              <button className="button button-62">Watch later</button>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 mb-4">
            <Image
              src={poster}
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
