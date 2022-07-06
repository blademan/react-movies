import React from 'react';
import Preloader from '../Preloader';
import Card from './Card';

export default function Cards(props) {
  const { movies } = props;

  return (
    <>
      {movies ? (
        <div className="movies">
          {movies.map((movie) => (
            <Card key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <>
          {' '}
          <Preloader />
          <div>No search results</div>
        </>
      )}
    </>
  );
}
