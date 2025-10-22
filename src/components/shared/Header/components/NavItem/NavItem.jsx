import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ to, children, className = '' }) => {
  return (
    <>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `px-2.5 py-1 leading-relaxed rounded-md flex justify-center items-center ${
              isActive
                ? 'bg-primary text-primary-content hover:bg-[#2563EB]'
                : 'bg-base-200 border border-base-300'
            } ${className}`
          }
        >
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default NavItem;
