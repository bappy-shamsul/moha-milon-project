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
import PrivateRouters from './components/Routers/PrivateRouters';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';

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
        element:  <PrivateRouters><Orders></Orders></PrivateRouters>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
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
