import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './SearchItem.Styled';
import PropTypes from 'prop-types';

const SearchItem = ({ info }) => {
const location = useLocation();
  return (
    <li>
      <StyledLink state={{from: location}} to={`/movies/${info.id}`}>{info.title ?? info.name}</StyledLink>
    </li>
  );
};

SearchItem.propTypes = {
    info : PropTypes.object.isRequired,
  };

  export default SearchItem;
