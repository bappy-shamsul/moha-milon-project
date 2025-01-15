import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders'
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },

    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
