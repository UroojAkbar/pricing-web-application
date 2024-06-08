import React from "react";
import HeroImg from "../assets/bgcart.png";
import fire from "../assets/fire.png";
import dollar from "../assets/dollar.png";
import back from "../assets/back.png";
import tick from "../assets/tick.png";
import "../App.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Cart = () => {
  return (
    <div className=" bg-Grayish md:h-full ">
      <div className="mx-auto">
        <div className=" bg-BGbluish">
          <div className="">
            <div className="Hicon1 bg-white rounded-full md:h-54 md:w-56 md:-mt-24 md:-ml-12 opacity-35"></div>
            <div className="Hicon2 bg-white md:h-54 md:w-54 md:-mt-32 md:-ml-28 rounded-full  opacity-35 "></div>
          </div>
          <div className="img1 ml-8 flex justify-center -mt-28 md:-mt-20">
            <img src={HeroImg} alt="HeroImage" className=" mt-20 md:-mt-8" />
          </div>
          <div className="flex flex-col items-center text-white mx-8 mt-8">
            <h1 className="h1 font-semibold text-4xl md:text-4xl">
              Premium PRO
            </h1>
            <h1 className="h1 font-semibold text-5xl md:text-4xl">$329</h1>
            <p className=" font-semibold">billed just once</p>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" flex flex-col bg-white w-80 md:w-96 h-96 mt-8 rounded-xl">
            <div className=" mt-8 mx-6 flex">
              <h2 className=" font-semibold text-xl">
                Access these features when you get this pricing package for your
                business.
              </h2>
            </div>
            <div className=" mt-8 mx-4">
              <div className=" flex  items-center">
                <img src={tick} alt="tick" className=" h-4 w-4 ml-2 mr-2" />
                <p>International calling and messaging API</p>
              </div>
              <div className=" flex items-center">
                <img src={tick} alt="tick" className=" h-4 w-4 ml-2 mr-2" />{" "}
                <p>Additional phone numbers</p>
              </div>
              <div className=" flex items-center">
                <img src={tick} alt="tick" className=" h-4 w-4 ml-2 mr-2" />{" "}
                <p>Automated messages via Zapier</p>
              </div>
              <div className=" flex items-center">
                <img src={tick} alt="tick" className=" h-4 w-4 ml-2 mr-2" />{" "}
                <p>24/7 support and consulting</p>
              </div>
            </div>
            <div className=" flex items-center justify-between text-white mt-12 mx-6 mb-4">
              <Link
                to=""
                className=" bg-BtnColor ml-2 w-14 h-12 flex items-center justify-center"
              >
                <FaShoppingCart className=" size-7" />
              </Link>
              <Link
                to="/"
                className="bg-BtnColor w-44 md:w-56 mr-3 h-12 flex items-center justify-center"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-Grayish flex flex-col  justify-center gap-4 md:gap-16 mx-4 mt-16 pb-32 md:flex-row">
          <div className=" flex  ">
            <img src={dollar} alt="dollar" className=" w-8 h-8" />
            <h5 className=" ml-2 font-bold">30 days money back Guarantree</h5>
          </div>
          <div className=" flex ">
            <img src={fire} alt="fire" className=" w-8 h-6" />
            <h5 className=" ml-2  font-bold">No setup fees 100% hassle-free</h5>
          </div>
          <div className=" flex ">
            <img src={back} alt="back" className=" w-8 h-8" />
            <h5 className=" ml-2  font-bold">
              No monthly subscription Pay once and for all
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
