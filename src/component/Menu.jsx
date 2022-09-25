import React from "react";
import close from "../images/icon-close.svg";
import open from "../images/icon-hamburger.svg";
const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div>
        {/* {Checking if t open or close} */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
        </button>
      </div>
    </>
  );
};

export default Menu;
