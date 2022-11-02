import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MoviePreview from "../../components/Movie/Moviepreview";

interface MoviePage {
  movie: {
    id: number;
    title: string;
    poster: string;
    released: string;
    director: string;
    metascore: string;
    genres: string[];
    plot: string;
    year: string;
  };
}

const MoviePageWithSlug: React.FC<MoviePage> = ({movie}) => {
  return <>
    <MoviePreview {...movie}/>
  </>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug ?? [];
  const id = slug[0];
  const title = slug[1];

  if(!id){
    return {
      notFound: true
    }
  }

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
        params: { id: "1", slug: ["1", "Movie Title"] },
      },
    ],
    fallback: "blocking",
  };
};

export default MoviePageWithSlug;
