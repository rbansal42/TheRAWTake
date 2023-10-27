import { useState } from "react";
import { Home } from "../pages";

// const [active, setActive] = useState(Home);

const Navbar = () => {
  
  return (
    <div
      id="app__navbar"
      className="flex flex-row justify-center sticky top-0 bg-white"
    >
      <div className="flex flex-row items-center justify-evenly py-10 align-middle w-[80%]">
        <div>
          <a href="/">
            <img
              src="src/assets/images/logo.webp"
              alt=""
              className="w-52 items-center align-middle"
            />
          </a>
        </div>
        <div className="flex flex-row items-center gap-8 align-middle">
          <div className="cursor-pointer px-2 py-2 text-slateGrey transition-all hover:text-brandRed hover:bg-brandRed font-Raleway font-medium">
            <a href="#">Home</a>
          </div>
          <div className="cursor-pointer px-2 py-2 text-slateGrey transition-all hover:text-brandRed font-Raleway font-medium">
            <a href="#">Who Are We</a>
          </div>
          <div className="cursor-pointer px-2 py-2 text-slateGrey transition-all hover:text-brandRed font-Raleway font-medium">
            <a href="#">What We Offer</a>
          </div>
          <div className="cursor-pointer px-2 py-2 text-slateGrey transition-all hover:text-brandRed font-Raleway font-medium">
            <a href="#">What Are We Upto</a>
          </div>
          <div className="cursor-pointer px-2 py-2 text-slateGrey transition-all hover:text-brandRed font-Raleway font-medium">
            <a href="#">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
