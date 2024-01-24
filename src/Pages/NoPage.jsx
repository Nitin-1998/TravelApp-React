import React from "react";
import bgImg from "../assets/404bg.png";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <div className=" h-screen w-full bg-gradient-to-r from-primary t0-secondary flex justify-center items-center ">
        <div>
          <div className=" flex gap-4 flex-col justify-center items-center text-black font-semibold">
            <h1 className="md:text-[200px]  text-8xl bg-cover bg-center  font-bold font-serif  ">
              Oops!
            </h1>
            <p className="text-white font-semibold">404-PAGE NOT FOUND</p>
            <p className="text-center">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to="/">
            <button className=" py-3 px-4 bg-gradient-to-r from-blue-600 to-secondary  font-semibold rounded-2xl text-white hover:bg-gradient-to-l hover:from-primary hover:to-secondary transition-all duration-500  ">GO TO HOMEPAGE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
