import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
