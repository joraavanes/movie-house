import React from "react";
import Link from "next/link";
import styles from './styles/Navbar.module.css'
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <h1 className={`${styles.emblem} navbar-brand mx-4`} title="Movie house">
        <Link href={'/'}>
          Movie House
        </Link>
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-4 justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href={"/"} className={`nav-item nav-link ${router.route === '/' ? 'active' : null}`}>
            Home 
          </Link>
          <Link href={"/mymovies/favorites"} className={`nav-item nav-link ${router.route === '/mymovies/favorites' ? 'active' : null}`}>
            Favorites
          </Link>
          <Link href={"/mymovies/watchlater"} className={`nav-item nav-link ${router.route === '/mymovies/watchlater' ? 'active' : null}`}>
            Watch Later
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
