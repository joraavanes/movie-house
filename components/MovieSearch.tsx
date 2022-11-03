import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { genreChanged, movieTitleChanged } from "../store/slices/filterSlice";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!filters.movieTitle && !filters.genre) return router.push("/");

    filters.movieTitle
      ? router.push(`/search?title=${filters.movieTitle}`)
      : router.push(`/search?genre=${filters.genre}`);
  };

  return (
    <div className="xs-12 col-sm-5 col-md-3 col-xl-2">
      <div className="card custom-card sticky-sm-top">
        <div className="card-body">
          <h4>Search Movies</h4>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={filters.movieTitle}
                onChange={(e) => dispatch(movieTitleChanged(e.target.value))}
                className="form-control form-control-sm"
                id="title"
                placeholder="Search by title e.g The Matrix"
              />
            </div>
            <hr />
            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                className="form-select form-select-sm mb-3"
                aria-label=".form-select-lg example"
                defaultValue={""}
                value={filters.genre}
                onChange={(e) => dispatch(genreChanged(e.target.value))}
              >
                <option value="" disabled>
                  Select a genre
                </option>
                <option value="1">Crime</option>
                <option value="2">Drama</option>
                <option value="3">Action</option>
                <option value="4">Biography</option>
                <option value="5">History</option>
                <option value="6">Adventure</option>
                <option value="7">Fantasy</option>
                <option value="8">Western</option>
                <option value="9">Comedy</option>
                <option value="10">Sci-Fi</option>
                <option value="11">Mystery</option>
                <option value="12">Thriller</option>
                <option value="13">Family</option>
                <option value="14">War</option>
                <option value="15">Animation</option>
                <option value="16">Romance</option>
                <option value="17">Horror</option>
                <option value="18">Music</option>
                <option value="19">Film-Noir</option>
                <option value="20">Musical</option>
                <option value="21">Sport</option>
              </select>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-sm button-62"
              >
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
