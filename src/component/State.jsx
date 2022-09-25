import React from "react";
import phone from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";
const State = () => {
  return (
    <>
      <section className="state px-5 py-10 text-center text-white relative z-10 md:grid md:grid-cols-2 md:text-left xl:px-10">
        <div>
          <div>
            <img src={circles} alt="" className="state-img w-full block" />
          </div>
          <div className="phone">
            <img
              src={phone}
              alt=""
              className="state-img circles w-full block"
            />
          </div>
        </div>
        <div className="pt-80 px-5 md:py-20 ">
          <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl text-white md:text-left">
            State of the Art Infrastructure
          </h2>
          <p className="text-white">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
