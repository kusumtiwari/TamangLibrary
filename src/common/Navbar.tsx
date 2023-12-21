import Logo from "./Logo";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navlink: React.FC = () => {
  return (
    <>
      <li className="cursor-pointer text-lg text-primary-blueText hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        <Link to="/about">About</Link>
      </li>
      <li className="cursor-pointer text-lg text-primary-blueText  hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        <Link to="/publications">Publication</Link>
      </li>
      <li className="cursor-pointer text-lg text-primary-blueText  hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        <Link to="/projects">Projects</Link>
      </li>
      <div className="hidden md:block">
        <Logo />
      </div>

      <li className="cursor-pointer text-lg text-primary-blueText  hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        Event
      </li>
      <li className="cursor-pointer text-lg text-primary-blueText  hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        <Link to="/notices">Notice</Link>
      </li>
      <li className="cursor-pointer text-lg text-primary-blueText  hover:bg-primary-blueText hover:text-white rounded py-2 px-2 font-kameron">
        Contact
      </li>
    </>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => setIsOpen(!isOpen);
  return (
    <div className="bg-primary-navbarBackground py-3 flex flex-wrap justify-between px-6 md:px-36 sticky top-0 z-20 items-center">
      <div className="md:hidden">
        <Logo />
      </div>
      <div
        className="md:hidden cursor-pointer my-auto"
        onClick={handleMenuClick}
      >
        {isOpen ? (
          <RxCross2 className="h-8 w-8 transition duration-500 ease-in-out opacity-100 hover:opacity-60" />
        ) : (
          <RxHamburgerMenu className="h-8 w-8 transition duration-500 ease-in-out opacity-60 hover:opacity-100" />
        )}
      </div>
      <ul className="hidden md:flex justify-around items-center flex-1">
        <Navlink />
      </ul>
      {isOpen ? (
        <ul className="flex md:hidden items-center flex-col w-[100%] transition-all duration-500 ease-in-out">
          <Navlink />
        </ul>
      ) : null}
    </div>
  );
};
export default Navbar;
