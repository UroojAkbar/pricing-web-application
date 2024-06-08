import React from "react";
import HeroImg from "../assets/bgimg.png";
import { Link } from "react-router-dom";
import "../App.css";
const Home = () => {
  return (
    <div className=" bg-Grayish h-screen md:h-full">
      <div className="mx-auto">
        <div className="">
          <div className="Hicon1 bg-Lblue  rounded-full md:h-54 md:w-56 md:-mt-24 md:-ml-12 opacity-55"></div>
          <div className="Hicon2 bg-Lblue md:h-54 md:w-54 md:-mt-32 md:-ml-28 rounded-full  opacity-55 "></div>
        </div>
        <div className="img ml-8 flex justify-center md:-mt-12">
          <img
            src={HeroImg}
            alt="HeroImage"
            className="border-b-2 border-black mt-8 md:-mt-8"
          />
        </div>
        <div className="flex flex-col items-center mx-8 mt-8">
          <h1 className="h1 font-semibold text-4xl md:text-4xl">
            Simple pricing for your business
          </h1>
          <h5 className=" md:text-xl mt-2">
            Plans that are carefully crafted to suit your business
          </h5>
          <Link
            to="/cart"
            className=" bg-BtnColor mb-28 text-white w-64 h-16 flex items-center justify-center text-1xl mt-10 md:h-12 "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
