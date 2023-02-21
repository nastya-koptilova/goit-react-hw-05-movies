import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-bottom: 1px solid black;
`;

export const LinkContainer = styled.div`
  padding-left: 20px;
`;

export const InfoContainer = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid black;
`;

export const StyledLink = styled(Link)`
  color: blue;
`;
