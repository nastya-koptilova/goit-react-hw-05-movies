import GoBack from 'components/GoBack/GoBack';
import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import {
  Container,
  InfoContainer,
  LinkContainer,
  StyledLink,
} from './MovieDetailsPage.Styled';
import { MovieContainer } from './MovieDetailsPage.Styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      if (!movieId) {
        return;
      }
      try {
        const movieDetailsData = await getMovieDetails(movieId);
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  if (!movieDetails.genres) return null;

  const userScore = Math.round(movieDetails.vote_average * 10);

  return (
    <Container>
      <LinkContainer>
        <GoBack />
      </LinkContainer>
      <MovieContainer>
        <img
          src={
            movieDetails.poster_path &&
            `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
          }
          alt={movieDetails.title}
        />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(el => el.name).join(', ')}</p>
        </div>
      </MovieContainer>
      <InfoContainer>
        <h4>Additional information</h4>
        <ul>
          <li>
            <StyledLink state={location.state} to="cast">
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink state={location.state} to="reviews">
              Reviews
            </StyledLink>
          </li>
        </ul>
      </InfoContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetailsPage;
