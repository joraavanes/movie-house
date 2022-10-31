import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MoviePreview from "../../components/Movie/Moviepreview";

interface MoviePage {
  movie: {
    id: number;
    title: string;
  };
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
  console.log(id);

  return {
    props: {
      movie: {
        id,
      },
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
