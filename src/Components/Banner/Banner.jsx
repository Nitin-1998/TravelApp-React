import React from "react";
import img from "../../assets/Banner/travelbox.png";
import { MdFlight, MdFastfood } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <>
      <div className="container ">
        <div  className=" my-28  grid grid-cols-1 sm:grid-cols-2   p-4">
          {/* Image */}
          <div data-aos="flip-up" data-aos-duration="700" className="flex">
            <img className="object-contain " src={img} />
          </div>

          {/* content */}
          <div className="">
            <div data-aos="fade-up"
            data-aos-duration="700" className="px-4">
              <h1 className="text-4xl font-bold my-2">
                Explore all corners of the world with us
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in mollitia dicta deleniti molestiae itaque
                nostrum
              </p>
            </div>

            <div data-aos="flip-up" data-aos-duration="700" className="my-8 px-4 pr-8 lg:gap-x-48 flex justify-between lg:justify-start items-start">
              <div className="flex  items-center  gap-3">
                <MdFlight
                  size={50}
                  className=" bg-[#ede9fe] rounded-full  p-4 "
                />
                <h1 className="text-center">Flights</h1>
              </div>
              <div className="flex justify-center items-center gap-3">
                <FaWifi
                  size={50}
                  className=" bg-[#dcfce7] rounded-full  p-4 "
                />
                <h1 className="text-center">Wifi</h1>
              </div>
            </div>

            <div data-aos="flip-up" data-aos-duration="700" className="my-8 lg:gap-x-48 pr-8 lg:justify-start  px-4 justify-between flex items-center">
              <div className="flex justify-center items-center gap-3">
                <LiaHotelSolid
                  size={50}
                  className=" bg-[#ffedd5] rounded-full  p-4 "
                />
                <h1 className="text-center">Flights</h1>
              </div>
              <div className="flex justify-center items-center gap-3">
                <MdFastfood
                  size={50}
                  className=" bg-[#f3f4f6] rounded-full  p-4 "
                />
                <h1 className="text-center">Wifi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
