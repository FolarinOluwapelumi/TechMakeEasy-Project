import React from 'react';

const Button = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`bg-purple-500 text-white px-6 py-2 font-bold hover:bg-purple-600 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;