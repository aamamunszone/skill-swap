import React from 'react';
import Container from '../../common/Container/Container';
import SkillSwapLogo from '../../../assets/logos/skill-swap-logo.png';
import NavItem from './components/NavItem/NavItem';
import { Link } from 'react-router';

const Header = () => {
  const navLinks = (
    <>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/all-skills">All Skills</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/my-profile">My Profile</NavItem>
    </>
  );

  return (
    <Container className="bg-white/80 backdrop-blur-md rounded-b-full px-10 overflow-hidden">
      <div className="navbar py-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-7 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          {/* Logo with Name */}
          <Link className="flex justify-between items-center gap-2.5">
            <div>
              <img className="w-15" src={SkillSwapLogo} alt="Skill-Swap Logo" />
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-relaxed tracking-wide bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Skill-Swap
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5">
          <Link
            to="/auth"
            className="px-3 py-1.5 border border-base-300 bg-base-100 font-semibold rounded-md hover:shadow-md hover:scale-103 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="px-3 py-2 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-md hover:scale-103 transition-all duration-300 flex items-center gap-2"
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
        </div>
      </div>
    </Container>
  );
};

export default Header;
