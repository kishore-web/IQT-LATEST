import React from "react";
import bannerBg from "../assets/bg.png";
const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container text-left  p-6 md:p-12 md:ml-16 bg-opacity-50 rounded-md w-[640px]">
        <h1 className="text-4xl text-heading md:text-5xl font-bold mb-4">
          Learn Full Stack Development From The Ground Up
        </h1>
        <p className="text-lg mb-6">
          Gain in-demand tech skills like Javascript, React, and Node.js and
          build a solid portfolio to demonstrate your abilities to potential
          employers
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          View Course
        </button>
      </div>
    </section>
  );
};

export default Banner;
