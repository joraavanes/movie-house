import React, { useEffect } from "react";
import Link from "next/link";
import MovieSearch from "../Movie/MovieSearch";
import { useAppDispatch } from "../../hooks/stateHooks";
import { initUserProfile } from "../../store/slices/userProfileSlice";
import styles from "./styles/Layout.module.css";
import Navbar from "./Navbar";
import Head from "next/head";

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

interface Layout extends Props {}

const Layout: React.FC<Layout> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userProfileState = localStorage.getItem("movie-house-user-profile");
    if (userProfileState)
      dispatch(initUserProfile(JSON.parse(userProfileState)));
  }, [dispatch]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <main className="container-fluid position-relative">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <MovieSearch />
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href={"/"}>
          Powered by
          <span className={styles.emblemSmall}>Movie House</span>
        </Link>
      </footer>
    </>
  );
};

export default Layout;
