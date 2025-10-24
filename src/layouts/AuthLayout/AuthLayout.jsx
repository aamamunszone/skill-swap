import React from 'react';
import Header from '../../components/shared/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/shared/Footer/Footer';

const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Main Section */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-base-200">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
