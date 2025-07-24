const Button = ({ children, type = "primary", classNameStyle, ...props }) => {
  const typeClass = {
    primary: "bg-white text-primaryBlack-100 hover:text-white",
    secondary: "bg-primaryBlue-100 text-white",
  };

  return (
    <button
      className={`cursor-pointer py-2 text-sm font-inter font-semibold px-4 w-full h-full rounded-full flex items-center justify-center hover:bg-hover-bg hover:border hover:border-primaryBlack-100 ${typeClass[type]} ${classNameStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
