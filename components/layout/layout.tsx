import React, { useEffect } from "react";
import MovieSearch from "../MovieSearch";
import { useAppDispatch } from "../../hooks/stateHooks";
import { initUserProfile } from "../../store/slices/userProfileSlice";
import Navbar from "./Navbar";

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
    <>
      <main className="container-fluid position-relative">
        <div className="row">
          <Navbar/>
        </div>
        <div className="row">
          <MovieSearch />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
