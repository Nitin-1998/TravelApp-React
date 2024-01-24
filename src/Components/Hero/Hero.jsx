import React, { useState } from "react";

const Hero = () => {
  const [length, setLength] = useState(50);
  return (
    <>
      <div>
        <div className="flex justify-center px-6 md:px-24 py-10 items-center w-full  ">
          <div
           
            className="
          text-white w-full p-1  h-56 sm:p-6 z-[1]"
          >
            {/* Text Area */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              className=" bg-transparent py-4 "
            >
              <p>Our Packages</p>
              <h1 className="text-4xl font-bold pb-2">
                Search Your Destination
              </h1>
            </div>

            {/* Booking Area */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className=" relative bg-white py-10 px-6 text-black rounded-xl grid grid-cols-1 gap-4 sm:grid-cols-3 "
            >
              <div>
                <p>Searh your Destination</p>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="bg-gray-200  capitalize  w-full mt-2 px-4 py-2 rounded-xl"
                />
              </div>
              <div>
                <p>Date</p>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Dubai"
                  className="bg-gray-200 w-full mt-2 md:mx-6 px-4 py-2 rounded-xl"
                />
              </div>
              <div className="flex  flex-col  justify-center gap-2 ml-4">
                <div className="flex items-center justify-between">
                  <p>Max Price</p>
                  <p className="text-2xl font-semibold">$ {length} </p>
                </div>
                <input
                  className=" appearance-none w-full bg-gradient-to-r h-2 rounded-full from-primary to-secondary "
                  min={100}
                  max={1000}
                  value={length}
                  onChange={(dets) => {
                    setLength(dets.target.value);
                    console.warn(dets.target.value);
                  }}
                  type="range"
                />
              </div>
              {/* Button Area */}
              <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary py-2 px-3 rounded-xl text-white hover:scale-105 duration-300 ">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
