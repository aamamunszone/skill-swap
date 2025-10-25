import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto w-[85%] md:w-[90%] lg:w-[95%] ${className}`}>{children}</div>
  );
};

export default Container;
