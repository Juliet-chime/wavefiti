const CustomInputfield = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  error = "",
  icon,
  iconProps,
  ...props
}) => {
  const IconComponent = icon;
  return (
    <div>
      <div className="flex items-center space-x-2">
        {icon ? (
          <IconComponent fontSize={23} color={"#B3B3B3"} {...iconProps} />
        ) : null}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full p-2 pl-0 text-sm text-gray-700 border-none bg-transparent focus:outline-none hover:outline-none focus:border-blue-400 ${
            error ? "border-red-500" : ""
          }`}
          {...props}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInputfield;
