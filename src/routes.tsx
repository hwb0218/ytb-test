import type { RouteObject } from 'react-router-dom';

import Layout from './components/Layout';

import Homepage from './pages/Homepage';
import VideoDetailPage from './pages/VideoDetailPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/videos', element: <Homepage /> },
      { path: '/videos/:id', element: <VideoDetailPage /> },
    ],
  },
];

export default routes;
