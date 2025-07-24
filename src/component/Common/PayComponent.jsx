import SelectInput from "../inputfield/SelectInput";

const PayComponent = ({ title, amount, description, placeholder, image }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="bg-white rounded-3xl p-5 w-full md:w-123">
      <div className="flex items-center justify-between">
        <p className="font-normal text-lg text-textAsh">{title}</p>
        <div className="bg-primaryWhite rounded-4xl p-2 flex items-center justify-center">
          <SelectInput
            options={options}
            placeholder={placeholder}
            icon={<img src={image} className="w-5 h-5 rounded-full" />}
          />
        </div>
      </div>
      <h1 className="font-bold text-5xl text-primaryBlack-100 mt-4">
        {amount}
      </h1>
      {description ? (
        <div className="flex items-center justify-between rounded-2xl bg-primaryWhite px-5 py-3 mt-5">
          <p>Exchange rate</p>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PayComponent;
