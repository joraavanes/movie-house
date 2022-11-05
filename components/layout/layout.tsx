import React, { useEffect } from "react";
import MovieSearch from "../MovieSearch";
import styles from "../../styles/Home.module.css";
import { useAppDispatch } from "../../hooks/stateHooks";
import { initUserProfile } from "../../store/slices/userProfileSlice";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface Layout extends Props {}

const Layout: React.FC<Layout> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userProfileState = localStorage.getItem("movie-house-user-profile");
    if (userProfileState) dispatch(initUserProfile(JSON.parse(userProfileState)));

  }, [dispatch]);

  return (
    <main className="container-fluid position-relative">
      <div className="row h3">
        <h1 className={styles.title}>Movie House</h1>
      </div>
      <div className="row">
        <MovieSearch />
        {children}
      </div>
    </main>
  );
};

export default Layout;
