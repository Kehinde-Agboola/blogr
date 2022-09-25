import React, { useState } from "react";

import Fetch from "./data/Fetch";
import logo from "../images/logo.svg";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(Fetch);
  const [links, setLinks] = useState(Fetch);

  return (
    <>
      <footer className="footer text-center md:text-left">
        <div className="md:grid md:grid-cols-1 md:items-center 2xl:max-w-6xl m-auto">
          <div>
            <img
              src={logo}
              alt=""
              className="block mx-auto pt-10 md:mx-0 md:pt-15"
            />
          </div>
          <div className="md:flex md:flex-row md:justify-evenly ">
            {footerLinks.map(({ id, title, links }) => (
              <ul key={id}>
                <h4 className="mt-10 mb-5 text-lg">{title}</h4>

                {links.map((link) => (
                  <li key={link} className="py-3">
                    {link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
