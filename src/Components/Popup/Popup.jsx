import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ closeForm }) => {
  return (
    <>
      <div className="z-[9999]  bg-black fixed flex inset-0 items-center  justify-center backdrop-blur-[5px] bg-opacity-60 ">
        <div className="popup-form bg-white rounded-xl sm:p-8 p-6  h-auto min-w-auto sm:min-w-[340px] ">
          <form>
            <div className="flex mb-4 justify-between">
              <h1 className="font-semibold text-2xl">Book your Trip</h1>
              <button className=" bg-primary  p-2 text-wxl active:bg-red-500 rounded-full " onClick={closeForm}>
                <IoCloseSharp  />
              </button>
            </div>
            <div>
              <input
                name="name"
                className=" w-full outline focus:outline outline-1 rounded-2xl my-2 px-3 py-1 "
                placeholder="Name"
                id="name"
                type="text"
              />
            </div>

            <div>
              <input
                className="  w-full outline focus:outline outline-1 rounded-2xl my-2 px-3 py-1 "
                name="email"
                placeholder="Email"
                id="email"
                type="email"
              />
            </div>
            <div>
              <input
                className="  w-full outline focus:outline outline-1 rounded-2xl my-2 px-3 py-1 "
                name="address"
                placeholder="Address"
                id="address"
                type="text"
              />
            </div>
            <div className="text-center pt-3 ">
              <button className=" py-1 px-3 bg-gradient-to-r from-primary to-secondary   rounded-2xl text-white hover:bg-gradient-to-l hover:from-primary hover:to-secondary transition-all duration-500  ">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
