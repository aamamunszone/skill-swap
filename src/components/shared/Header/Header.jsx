import React from 'react';
import Container from '../../common/Container/Container';
import SkillSwapLogo from '../../../assets/logos/skill-swap-logo.png';
import NavItem from './components/NavItem/NavItem';
import { Link } from 'react-router';

const Header = () => {
  const navLinks = (
    <>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  );

  return (
    <Container>
      <div className="navbar">
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
              <img
                className="w-[48px]"
                src={SkillSwapLogo}
                alt="Skill-Swap Logo"
              />
            </div>
            <div>
              <h1>Skill-Swap</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5">
          <Link className="px-2.5 py-1 leading-relaxed rounded-md flex justify-center items-center bg-accent text-accent-content">
            Login
          </Link>
          <Link className="px-2.5 py-1 leading-relaxed rounded-md flex justify-center items-center bg-accent text-accent-content">
            Register
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
