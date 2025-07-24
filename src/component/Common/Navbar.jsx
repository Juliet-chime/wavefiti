import logo from "../../assets/images/Logo.png";
import { navbarData } from "../../data/navData";
import Button from "../inputfield/Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-10 lg:px-20 py-6">
      <div>
        <img src={logo} className="object-contain" />
      </div>
      <nav className="hidden md:flex items-center space-x-2 md:space-x-4 lg:space-x-16">
        {navbarData.map((navitem, index) => {
          return (
            <a
              href="#"
              key={index}
              className="text-white hover:bg-hover-bg hover:py-3 hover:px-5 hover:rounded-full hover:border hover:border-primaryBlack-100 font-inter font-semibold text-sm"
            >
              {navitem}
            </a>
          );
        })}
      </nav>
      <div className="w-38 md:42 h-10 md:h-14">
        <Button>Get early access</Button>
      </div>
    </div>
  );
};

export default Navbar;
