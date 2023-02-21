import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

export const Reviews = () => {
  const { movieId } = useParams();
  const [load, setLoad] = useState(false);
  const [movieReviews, setMovieReviews] = useState(() =>
    fetchMovieReviews(movieId)
  );

  async function fetchMovieReviews() {
    if (!movieId) {
      return;
    }
    try {
      setLoad(true);
      const movieReviewsData = await getMovieReviews(movieId);
      setMovieReviews(movieReviewsData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoad(false);
    }
  }

  if (!movieReviews.results) return null;

  return (
    <>
      {load && <Loader />}
      <ul>
        {movieReviews.results.length === 0 ? (
          <p>No reviews!</p>
        ) : (
          movieReviews.results.map(el => (
            <li key={el.id}>
              <span>Author: {el.author}</span>
              <p>{el.content}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
