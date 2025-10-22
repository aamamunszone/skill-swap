import React from 'react';
import Header from '../../components/shared/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../components/shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Header Section */}
      <header className="bg-base-100 sticky top-0 z-10">
        <Header />
      </header>

      {/* Main Section */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
