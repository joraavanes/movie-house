import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Movie } from "../types";
import styles from "../styles/Home.module.css";
import Pagination from "../components/shared/Pagination";
import MovieList from "../components/Movie/MovieList";

interface Home {
  movies: Movie[];
}

export default function Home({ movies }: Home) {
  return (
    <>
      <Head>
        <title>Movie House</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="xs-12 col-sm-7 col-md-9 col-xl-10">
        <div className="row mt-4">
          <MovieList movies={movies} />
        </div>

        <div className="row mt-5">
          <Pagination itemsCount={250} currentPage={1} />
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fetch1 = axios.get("https://moviesapi.ir/api/v1/movies?page=1");
  const fetch2 = axios.get("https://moviesapi.ir/api/v1/movies?page=2");
  const fetch3 = axios.get("https://moviesapi.ir/api/v1/movies?page=3");

  const res = await Promise.all([fetch1, fetch2, fetch3]);
  const data = res.map((fetchItem) => fetchItem.data.data);

  return {
    props: {
      movies: [...data[0], ...data[1], ...data[2]],
    },
  };
};
