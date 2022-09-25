import React from "react";

const Buttons = () => {
  return (
    <>
      <div>
        <ul className=" flex items-center font-medium gap-10 uppercase text-center">
          <li className="text-white md:ml-5">
            <button>Login</button>
          </li>
          <li>
            <button className="btn-light bg-white rounded-full p-2 px-8">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
