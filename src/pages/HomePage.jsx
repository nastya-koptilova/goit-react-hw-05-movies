import { Loader } from 'components/Loader/Loader';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/API';
import { Container, StyledLink } from './HomePage.Styled';

export const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [load, setLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        setLoad(true);
        const trendingFilms = await getTrending();
        const { results } = trendingFilms;
        setTrending(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoad(false);
      }
    };
    fetchTrendingFilms();
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>
      {load && <Loader />}
      <ul>
        {trending.map(el => {
          return (
            <li key={el.id}>
              <StyledLink state={{from: location}} to={`/movies/${el.id}`}>{el.title ?? el.name}</StyledLink>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
