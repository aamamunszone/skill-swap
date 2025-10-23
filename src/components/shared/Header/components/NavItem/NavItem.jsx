import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ to, children, className = '' }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
          px-3 py-1.5 
          rounded-md 
          font-medium 
          transition-all duration-200 ease-in-out 
          flex justify-center items-center gap-1
          ${
            isActive
              ? 'bg-primary text-primary-content shadow-sm'
              : 'text-base-content/80 hover:text-primary hover:bg-base-200'
          } 
          ${className}
        `
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
