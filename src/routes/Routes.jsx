import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import AllSkills from '../pages/AllSkills/AllSkills';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import PrivateRoutes from './PrivateRoutes';
import SkillDetails from '../pages/SkillDetails/SkillDetails';
import MyProfile from '../pages/MyProfile/MyProfile';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';

export const router = createBrowserRouter([
  // Main Layout
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      { path: 'all-skills', Component: AllSkills },
      {
        path: 'skill/:id',
        element: (
          <PrivateRoutes>
            <SkillDetails />
          </PrivateRoutes>
        ),
      },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      {
        path: 'my-profile',
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },

  // Auth Layout
  {
    path: 'auth',
    Component: AuthLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: () => <Navigate to="login" replace /> },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'forgot-password', Component: ForgotPassword },
      {
        path: 'update-profile',
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
