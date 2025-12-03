import React, { useContext } from 'react';
import Container from '../../common/Container/Container';
import SkillSwapLogo from '../../../assets/logos/skill-swap-logo.png';
import NavItem from './components/NavItem/NavItem';
import { Link } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('You Logged Out Successfully', {
          duration: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/all-skills">All Skills</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/services">Services</NavItem>
      {user && <NavItem to="/my-profile">My Profile</NavItem>}
    </>
  );

  return (
    <Container className="bg-white/80 backdrop-blur-md rounded-b-4xl md:rounded-b-full px-1 md:px-5 lg:px-10 w-full">
      <div className="navbar py-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-50 mt-7 w-52 p-2 shadow bg-white"
            >
              {navLinks}
            </ul>
          </div>
          {/* Logo with Name */}
          <Link to="/" className="flex justify-between items-center gap-2.5">
            <div>
              <img className="w-10" src={SkillSwapLogo} alt="Skill-Swap Logo" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-relaxed tracking-wide bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
                Skill-Swap
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5">
          {!user ? (
            <>
              <Link
                to="/auth"
                className="hidden md:inline-block py-1 px-2 lg:px-3 md:py-1 lg:py-1.5 border border-base-300 bg-base-100 font-semibold rounded-md hover:shadow-md hover:scale-103 transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="py-1.5 px-2.5 lg:px-3 md:py-1 lg:py-1.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-md hover:scale-103 transition-all duration-300 flex items-center gap-0.5 lg:gap-2 whitespace-nowrap"
              >
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                {/* Avatar Wrapper */}
                <div className="relative group">
                  <div className="w-9 h-9 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img
                      src={user.photoURL || '/default-avatar.png'}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tooltip on avatar hover */}
                  {user.displayName && (
                    <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap">
                      {user.displayName}
                    </span>
                  )}
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="py-1.5 px-2.5 lg:px-3 md:py-1 lg:py-1.5 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
