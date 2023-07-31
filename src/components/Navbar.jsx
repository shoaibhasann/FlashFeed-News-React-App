import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/flash.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between shadow-lg items-center h-24 mx-auto px-4">
      <img className="w-48" src={logo} alt="logo" />
      <ul className=" hidden md:flex items-center text-black md:font-semibold md:text-lg cursor-pointer">
        <li className="p-4 cursor-pointer text-[#ea504c]">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/business">Business</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/health">Health</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/science">Science</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/sports">Sports</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#ea504c]">
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
      <div
        className="cursor-pointer text-black block md:hidden"
        onClick={handleNav}
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 p-4 top-0 w-[60%] h-full bg-white border-r border-r-gray-900  ease-in-out duration-800"
            : "hidden"
        }
      >
        <img className="w-48" src={logo} alt="logo" />
        <ul className="p-4 uppercase text-black font-semibold cursor-pointer">
          <li className="p-4 border-b border-gray-600 cursor-pointer text-[#ea504c]">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#ea504c]">
            <Link to="/business">Business</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#ea504c]">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#ea504c]">
            <Link to="/health">Health</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#ea504c]">
            <Link to="/science">Science</Link>
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#ea504c]">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-[#ea504c]">
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
