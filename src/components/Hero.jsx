import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover"
          src="https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-8">
        <p className="text-[#48aa8b] font-bold p-2 uppercase">
          Indulge in Wellness, Infused with Class
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:p-2 text-[#F4D786]">
          Blend Your Way to Vibrant Health
        </h1>
        <div className="flex justify-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-[#F4D786]">
            Where taste meets
          </p>
          <ReactTyped
            className="pl-2 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 text-[#F4D786]"
            strings={["Health", "Class", "Wellness"]}
            typespeed={50}
            backspeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-green-500 mb-4">
          A Delicious Boost for Your Diet
        </p>
        <button className="bg-transparent hover:bg-yellow-500 text-green-700 font-semibold hover:text-black py-2 px-4 border-dashed border-4 bw-500 border-yellow-500 hover:border-transparent rounded border-opacity-75">
          Quench Your Thirst!
        </button>
      </div>
    </div>
  );
};

export default Hero;
