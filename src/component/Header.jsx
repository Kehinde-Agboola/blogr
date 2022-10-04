import React, { useState, useEffect } from "react";
import Fetch from "./data/Fetch";
import Buttons from "./Buttons";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import "./style.css";
import open from "../images/icon-hamburger.svg";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [navLinks, setNavLinks] = useState(Fetch);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <navbar className="w-full flex py-6 px-6 md:px-0 items-center absolute">
      <div className="md:w-full md:flex md:items-center md:justify-around">
        <div>
          <img src={logo} alt="Blogr" className="w-[124px] h-[32px] ml-10" />
        </div>
        {/* <img src={logo} alt="Blogr" className="w-[124px] h-[32px]" /> */}
        <nav className="navbar md:flex hidden">
          <ul className="flex">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-10`
                }`}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Buttons />
        </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : open}
          alt=""
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div
          className={`${
            isOpen ? `flex` : `hidden`
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] w-80 h-50 rounded-xl sidebar bg-white`}
        >
          <ul className="flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-normal cursor-pointer text-[16px] text-gray-700 ${
                  index === navLinks.length - 1 ? `mr-0` : `mb-4`
                }`}
              >
                {nav.title}
              </li>
            ))}
            {/* <Buttons /> */}
          </ul>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
