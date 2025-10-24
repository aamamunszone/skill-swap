import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/common/Loader/Loader';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" replace state={{ from: location }} />;
};

export default PrivateRoutes;
