import React from "react";
import { useLocation } from "react-router-dom";
import Blogs from "./Blogs";

const BlogsDetails = () => {
  const location = useLocation();
  // console.warn(location, "useLocation");

  //destructing
  const { data } = location.state;
  console.warn(data)

  return (
    <>
      <div>
        <div className="w-screen">
          <div className="  w-[100%]">
            <div className="overflow-hidden ">
              <img
                className="w-full h-[350px] object-cover hover:scale-110 transition duration-300  delay-150 ease-in-out  "
                src={data.img}
              />
            </div>

            <div className="container">
              <p className="text-gray-500 pt-1">
                Written by {data.author} on {data.date}
              </p>
              <h1 className="text-2xl font-bold pt-2 pb-6">{data.title}</h1>
              <p className="pb-10">{data.description}</p>
            </div>

            <div>
              <Blogs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
