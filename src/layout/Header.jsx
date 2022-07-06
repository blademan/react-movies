import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className=" purple accent-2">
        <div className="nav-wrapper">
          <Link to="/"> React Movies</Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/blademan/react-movies">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
