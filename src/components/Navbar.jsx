import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-#040403-900 ">
      <h1 className="w-full text-3xl font-bold text-#040403">Smoothies Inn</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Menu</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-yellow-600 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-#040403 m-4">
          Smoothies Inn
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 boreder-b border-gray-600  ">Home</li>
          <li className="p-4 boreder-b border-gray-600 ">Menu</li>
          <li className="p-4 boreder-b border-gray-600 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
