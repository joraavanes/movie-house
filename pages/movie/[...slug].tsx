import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MoviePreview from "../../components/Movie/Moviepreview";
import { Movie } from "../../types";
import httpRequest from "../../utils/httpRequest";

interface MoviePage {
  movie: Movie;
}

const MoviePageWithSlug: React.FC<MoviePage> = ({ movie }) => {
  return (
    <>
      <MoviePreview movie={movie} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug ?? [];
  const id = slug[0];
  const title = slug[1];

  if (!id) {
    return {
      notFound: true,
    };
  }

  const res = await httpRequest(`${process.env.API_BASE_URL}/api/v1/movies/${id}`);

  if (res.status !== 200) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      movie: res.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1", slug: ["1", "Movie Title"] },
      },
    ],
    fallback: "blocking",
  };
};

export default MoviePageWithSlug;
