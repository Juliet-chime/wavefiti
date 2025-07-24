import CustomInputfield from "../inputfield/CustomInputfield";
import { MdEmail } from "react-icons/md";
import Button from "../inputfield/Button";

const SearchComponent = ({ mt = "mt-8 md:mt-20" }) => {
  return (
    <div
      className={`${mt} bg-primaryWhite rounded-full h-14 w-full md:w-100 m-auto flex items-center py-6 px-3`}
    >
      <div className="flex-1/2">
        <CustomInputfield placeholder="Enter your email" icon={MdEmail} />
      </div>
      <div className="flex-1/3 h-10">
        <Button type="secondary">Get started</Button>
      </div>
    </div>
  );
};

export default SearchComponent;
