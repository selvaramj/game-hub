import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'game/:id',
        element: <GameDetailPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
