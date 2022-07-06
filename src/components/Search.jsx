import React from 'react';
import { useState } from 'react';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const searchHandler = (e) => {
    if (
      (e.key === 'Enter' && search.length > 2) ||
      (e.target.name === 'button' && search.length > 2)
    ) {
      props.searchHandler(search);
    }
  };

  const selectHandler = (e) => {
    setType(e.target.value);
    props.setType(e.target.value);
  };

  return (
    <div className="row">
      <div className="input-field ">
        <input
          onKeyDown={searchHandler}
          className="validate"
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="row">
        <p>
          <label className="col">
            <input
              checked={type === 'all'}
              name="group1"
              type="radio"
              onChange={selectHandler}
              value="all"
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label className="col">
            <input
              checked={type === 'movie'}
              name="group1"
              type="radio"
              value="movie"
              onChange={selectHandler}
            />
            <span>Movie only</span>
          </label>
        </p>
        <p>
          <label className="col">
            <input
              checked={type === 'series'}
              name="group1"
              type="radio"
              value="series"
              onChange={selectHandler}
            />
            <span>Series only</span>
          </label>
        </p>
        <button
          name="button"
          onClick={searchHandler}
          className="right btn btn-waves-effect waves-light btn-small">
          Button
        </button>
      </div>
    </div>
  );
}
