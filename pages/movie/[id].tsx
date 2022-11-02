import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MoviePreview from "../../components/Movie/Moviepreview";
import { Movie } from "../../types";

interface MoviePage {
  movie: Movie;
}

const MoviePage: React.FC<MoviePage> = ({ movie }) => {
  return (
    <>
      <MoviePreview {...movie} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await axios.get(`https://moviesapi.ir/api/v1/movies/${id}`);

  return {
    props: {
      movie: res.data
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {


  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: "blocking",
  };
};

export default MoviePage;
