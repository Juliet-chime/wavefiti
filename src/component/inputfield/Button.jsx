import React from 'react'

const Button = ({ children, type = 'primary', classNameStyle, ...props }) => {
  const typeClass = {
    primary: 'bg-white text-primaryBlack-100 hover:text-white',
    // font-inter font-semibold
    // ',
    secondary: 'bg-primaryBlue-100 text-white',
    // success: 'bg-green-500 text-white hover:bg-green-700',
    // danger: 'bg-red-500 text-white hover:bg-red-700',
  };

  return (
    <button className={`cursor-pointer py-2 text-sm font-inter font-semibold px-4 w-full h-full rounded-full flex items-center justify-center hover:bg-hover-bg hover:border hover:border-primaryBlack-100 ${typeClass[type]} ${classNameStyle}`} {...props}>{children}</button>
    // <button
    //   className={`py-2 px-4 font-semibold rounded-lg shadow-md ${className}`}
    //   {...props}
    // >
    //   {children}
    // </button>
  );
};

export default Button;