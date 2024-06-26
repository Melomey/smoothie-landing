import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center ">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg-text-4xl px-2">
          Smoothies <span className="font-bold">Inn</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="search smoothies"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <FaShoppingCart size={20} className="mr-2" />
        Cart
      </button>

      {/* mobile Menu */}
      {/* overley */}
      <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>

      {/* side drawer menu */}
      <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Smoothies <span className="font-bold">Inn</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
