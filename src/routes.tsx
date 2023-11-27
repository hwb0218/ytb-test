import type { RouteObject } from 'react-router-dom';

import Layout from './components/Layout';

import MainPage from './pages/MainPage';
import VideoSearchPage from './pages/VideoSearchPage';
import VideoDetailPage from './pages/VideoDetailPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/results', element: <VideoSearchPage /> },
      { path: '/videos/:id', element: <VideoDetailPage /> },
    ],
  },
];

export default routes;
