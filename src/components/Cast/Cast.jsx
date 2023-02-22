import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

const Cast = () => {
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
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
    fetchMovieCredits(movieId);
  }, [movieId]);

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

export default Cast;
