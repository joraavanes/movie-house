import React from "react";
import MovieSearch from '../MovieSearch';
import styles from '../../styles/Home.module.css'

interface Props {
  children: JSX.Element[] | JSX.Element
}

interface Layout extends Props {}

const Layout: React.FC<Layout> = ({children }) => {
  return (
      <main className="container-fluid position-relative">
        <div className="row h3">
          <h1 className={styles.title}>
            Movie House
          </h1>
        </div>
        <div className="row">
          <MovieSearch/>
          {children}
        </div>
      </main>
  );
};

export default Layout;
