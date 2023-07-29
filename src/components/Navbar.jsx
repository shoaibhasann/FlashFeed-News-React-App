import React from "react";
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import logo from "../assets/flashfeed-logo.png";

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
      <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <img className="w-48" src={logo} alt="logo" />
        <ul className=" hidden md:flex items-center text-black md:font-semibold md:text-lg cursor-pointer">
          <li className="p-4">World</li>
          <li className="p-4">Sports</li>
          <li className="p-4">Tech</li>
          <li className="p-4">Science</li>
          <li className="p-4">Entertainment</li>
        </ul>
        <div className="cursor-pointer text-black block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-800"
              : "hidden"
          }
        >
          <img className="w-48" src={logo} alt="logo" />
          <ul className="p-4 uppercase text-black font-semibold cursor-pointer">
            <li className="p-4 border-b border-gray-600">World</li>
            <li className="p-4 border-b border-gray-600">Sports</li>
            <li className="p-4 border-b border-gray-600">Tech</li>
            <li className="p-4 border-b border-gray-600">Science</li>
            <li className="p-4">Entertainment</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar