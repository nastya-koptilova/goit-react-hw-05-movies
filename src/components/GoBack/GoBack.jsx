import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './GoBack.Styled';

const GoBack = () => {
  const location = useLocation();

  return <StyledLink to={location.state?.from || location}>Go Back</StyledLink>;
};

export default GoBack;
