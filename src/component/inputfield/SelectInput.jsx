import { useRef } from "react";
import { RxCaretDown } from "react-icons/rx";

const SelectInput = ({
  options = [],
  value = "",
  onChange,
  className = "",
  error = "",
  placeholder = "Select an option",
  icon,
  ...props
}) => {
  const selectRef = useRef(null);
  console.log(selectRef);
  const handleIconClick = () => {
    selectRef.current.showPicker();
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {icon ? icon : null}
      <div className="flex items-center relative" onClick={handleIconClick}>
        <select
          ref={selectRef}
          value={value}
          onChange={onChange}
          className={`block w-full text-sm text-primaryBlack rounded-lg bg-transparent appearance-none focus:outline-none focus:ring-2 focus:ring-transparent ${
            error ? "border-red-500" : ""
          }`}
          {...props}
        >
          <option value="" hidden>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <RxCaretDown
          onClick={handleIconClick}
          className="cursor-pointer absolute right-1"
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SelectInput;
