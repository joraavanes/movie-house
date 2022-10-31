import React from 'react'

const Sidebar = () => {
  return (
    <div className="xs-12 col-sm-5 col-md-3 col-xl-2">
      <div className="card custom-card sticky-sm-top">
        <div className="card-body">
          <h4>Search Movies</h4>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control form-control-sm" id="title" placeholder="The Matrix"/>
            </div>
            <div className="mb-3">
              <label htmlFor="genre" className="form-label">Genre</label>
              <select className="form-select form-select-sm mb-3" aria-label=".form-select-lg example" defaultValue={'select'}>
                <option value="selected" disabled>Select a genre</option>
                <option value="1">Sci-Fi</option>
                <option value="2">Drama</option>
                <option value="3">Thriller</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="release-date" className="form-label">Release Year</label>
              <input type="number" className="form-control form-control-sm" id="release-date" placeholder="eg: 1993"/>
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary btn-sm button-62">
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;