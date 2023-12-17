import Logo from "./Logo";
import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavItems: React.FC = () => {
  return (
    <>
      <li className="hover:text-orange-400 transition-transform ease-in-out duration-500 cursor-pointer transform md:hover:scale-110 py-4 md:py-0">
        Home
      </li>
      <li className="hover:text-orange-400 transition-transform ease-in-out duration-500 cursor-pointer  transform md:hover:scale-110 py-4 md:py-0">
        About us
      </li>
      <li className="hover:text-orange-400 transition-transform ease-in-out duration-500 cursor-pointer  transform md:hover:scale-110 py-4 md:py-0">
        Services
      </li>
      <li className="hover:text-orange-400 transition-transform ease-in-out duration-500 cursor-pointer  transform md:hover:scale-110 py-4 md:py-0">
        Contacts
      </li>
      <li className="hover:text-orange-400 transition-transform ease-in-out duration-500 cursor-pointer  transform md:hover:scale-110 py-4 md:py-0">
        Portfolio
      </li>
    </>
  );
};
const Navbar: React.FC = () => {
  const modalRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOutsideClick = (event:any) => {
    if(modalRef.current && !modalRef.current.contains(event.target)){
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const onMenuClick = () => setIsOpen(!isOpen);
  return (
    <div className="bg-red-500 flex justify-between items-center px-3 flex-wrap sticky top-0 z-20">
      <Logo />
      <div className="md:hidden cursor-pointer">
        {!isOpen ? (
          <RxHamburgerMenu
            onClick={onMenuClick}
            className="h-7 w-7 transition-all ease-in-out duration-500 hover:scale-125"
          />
        ) : (
          <RxCross1
            onClick={onMenuClick}
            className="h-7 w-7 transition-all ease-in-out duration-500 hover:scale-125"
          />
        )}
      </div>
        <ul className="hidden md:flex justify-between w-[80%] mx-4">
          <NavItems />
        </ul>
        {isOpen ? (
          <ul className="flex md:hidden justify-between transition-all ease-in-out duration-400 w-[100%] mx-4 flex-col items-center" ref={modalRef}>
            <NavItems />
          </ul>
        ) : null}
      </div>
  );
};

export default Navbar;
