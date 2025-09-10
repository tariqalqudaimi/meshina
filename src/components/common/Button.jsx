import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseStyles = 'font-bold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;