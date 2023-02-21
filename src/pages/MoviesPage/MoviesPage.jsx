import React, { useEffect, useState } from 'react';
import { Search } from 'components/Search/Search';
import { SearchItem } from 'components/SearchItem.jsx/SearchItem';
import { getSearchMovies } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { Container } from './MoviesPage.Styled';
import { Loader } from 'components/Loader/Loader';

export const MoviesPage = () => {
  const [load, setLoad] = useState(false);
  const [querySearch, setquerySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const serchQuery = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (serchQuery === null) return;
    async function fetchSerchFilms() {
      try {
        setLoad(true);
        const searchFilms = await getSearchMovies(serchQuery);
        const { results } = searchFilms;
        setquerySearch(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    }
    fetchSerchFilms();
  }, [serchQuery]);

  return (
    <Container>
      <Search handleSubmit={handleSubmit} />
      {load && <Loader />}
      <ul>
        {querySearch?.map(el => (
          <SearchItem key={el.id} info={el}></SearchItem>
        ))}
        {querySearch.length === 0 &&
        serchQuery !== null &&
        serchQuery !== '' ? (
          <p>No results</p>
        ) : (
          <span></span>
        )}
      </ul>
    </Container>
  );
};
