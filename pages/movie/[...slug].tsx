import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import MoviePreview from "../../components/Movie/Moviepreview";

interface MoviePage {
  movie: {
    id: number;
    title: string;
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

  console.log(slug);

  if(!id){
    return {
      notFound: true
    }
  }

  return {
    props: {
      movie: {
        id,
        title
      }
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
