import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const LazyHomePage = lazy(() => import('pages/HomePage'));
const LazyMoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const LazyMovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const LazyCast = lazy(() => import('./Cast/Cast'));
const LazyReviews = lazy(() => import('./Reviews/Reviews'));
const LazyErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LazyHomePage />} />
          <Route path="/movies" element={<LazyMoviesPage />} />
          <Route path="/movies/:movieId" element={<LazyMovieDetailsPage />}>
            <Route path="cast" element={<LazyCast />} />
            <Route path="reviews" element={<LazyReviews />} />
          </Route>
          <Route path="*" element={<LazyErrorPage />} />
        </Route>
      </Routes>
  );
};
