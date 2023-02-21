import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

export const Cast = () => {
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);
  const [movieCredits, setMovieCredits] = useState(() =>
    fetchMovieCredits(movieId)
  );

  async function fetchMovieCredits() {
    if (!movieId) {
      return;
    }
    try {
      setLoad(true);
      const movieCreditsData = await getMovieCredits(movieId);
      setMovieCredits(movieCreditsData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoad(false);
    }
  }

  if (!movieCredits.cast) return null;

  return (
    <>
      {load && <Loader />}
      <ul>
        {movieCredits.cast.map(el => (
          <li key={el.id}>
            <img
              src={
                el.profile_path &&
                `https://image.tmdb.org/t/p/w200${el.profile_path}`
              }
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
