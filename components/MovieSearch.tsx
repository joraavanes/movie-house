import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks/stateHooks";
import { genreChanged, movieTitleChanged } from "../store/slices/filterSlice";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filter);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!filters.movieTitle)
      return router.push('/');

    router.push(`/search?title=${filters.movieTitle}`);
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
                onChange={(e) => dispatch(movieTitleChanged((e.target.value)))}
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
                defaultValue={"selected"}
                onChange={e => dispatch(genreChanged(e.target.value))}
              >
                <option value="selected" disabled>
                  Select a genre
                </option>
                <option value="1">Sci-Fi</option>
                <option value="2">Drama</option>
                <option value="3">Thriller</option>
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
