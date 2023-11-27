import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import routes from './routes';

const router = createBrowserRouter(routes);

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1_000 * 60 * 5,
      refetchOnWindowFocus: false,
      gcTime: 10_000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
