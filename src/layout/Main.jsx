import React from 'react';
import Cards from '../components/Cards/Cards';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movieFromDB, setMovieFromDB] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  useEffect(() => {
    let temp = 'Batman';
    if (search) {
      temp = search;
    }

    fetch(
      `https://www.omdbapi.com/?s=${temp}&page=1&apikey=${API_KEY}=${
        type !== 'all' ? `&type=${type}` : ''
      }`,
    )
      .then((response) => response.json())
      .then(
        (json) => {
          setIsLoading(false);
          return setMovieFromDB(json.Search);
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        },
      );
  }, [search, type]);

  return (
    <>
      {error ? <div>Error: {error.message}</div> : ''}
      <main className="content container">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Search searchHandler={setSearch} setType={setType} />
            <Cards movies={movieFromDB} />
          </>
        )}
      </main>
    </>
  );
}
