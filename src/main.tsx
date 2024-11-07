import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'animate.css/animate.compat.css';

import './globals/index.css';
import Root from './routes/Root';
import Account from './pages/Account';
import Home from './pages/Home';
import Payment from './pages/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
