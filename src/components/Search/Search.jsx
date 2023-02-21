import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from './Search.Styled';
import PropTypes from 'prop-types';

export const Search = ({ handleSubmit }) => {
  const [searchParams] = useSearchParams();
  const searchFilm = searchParams.get('query');
  const [query, setQuery] = useState(searchFilm ?? '');

  const handleSearch = ({ target }) => {
    setQuery(target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          name="name"
          value={query}
          onChange={handleSearch}
        />
        <Button>Search</Button>
      </form>
    </div>
  );
};

Search.propTypes = {
    handleSubmit : PropTypes.func.isRequired,
  };
