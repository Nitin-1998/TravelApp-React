import React from "react";
import video from "../../assets/Videos/footer.mp4";
import Logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaMobile,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const footLinks = [
  {
    title: "Home",
    Link: "/",
  },
  {
    title: "About",
    Link: "/about",
  },
  {
    title: "Best Places",
    Link: "/places",
  },
  {
    title: "Blogs",
    Link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div>
        <div className=" h-[900px] flex justify-center sm:h-[500px] relative  ">
          <video
            autoPlay
            loop
            muted
            className=" top-0 right-0 absolute h-full sm:h-[600px] w-full overflow-hidden   object-cover z-[-1] "
          >
            <source className="" src={video} />
          </video>
          {/* Footer */}
          <div className=" container lg:px-32 pt-6 absolute ">
            <div className=" bg-white backdrop-blur-sm pt-2 pb-4 bg-transparent px-6 gap-5 rounded-t-xl  grid grid-cols-1 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 ">
              <div className=" lg:px-[70px] lg:mt-12 ">
                <div>
                  <img className=" h-16" src={Logo} />
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde facere ab hic accusamus omnis dolor voluptatibus illo,
                    tempore eum tenetur.
                  </p>
                </div>

                <div className="">
                  <div className="flex justify-start gap-2 items-center py-2">
                    <FaMapMarkerAlt size={20} />
                    <p>Delhi, New Delhi</p>
                  </div>
                  <div className="flex justify-start gap-2 items-center">
                    <FaMobile size={20} />
                    <p>Delhi, New Delhi</p>
                  </div>
                  <div className="flex my-2 gap-4">
                    <FaFacebook size={36} />
                    <FaInstagram size={36} />
                    <FaLinkedin size={36} />
                  </div>
                </div>
              </div>

              {/* partician */}
              <div className="grid md:gap-4 place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-3  p-2 ">
                <div className=" ">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    {footLinks.map((data) => {
                      return (
                        <>
                          <li
                            className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 "
                            key={data.title}
                          >
                            <Link
                              onClick={() => window.scrollTo(0, 0)}
                              to={data.title}
                            >
                              <span className="pr-2">&#11162;</span>
                              <span>{data.title} </span>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>

                <div className=" ">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    {footLinks.map((data) => {
                      return (
                        <>
                          <li
                            className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 "
                            key={data.title}
                          >
                            <Link
                              onClick={() => window.scrollTo(0, 0)}
                              to={data.title}
                            >
                              <span className="pr-2">&#11162;</span>
                              <span>{data.title} </span>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold">Important Links</h1>
                  <ul>
                    {footLinks.map((data) => {
                      return (
                        <>
                          <li
                            className=" duration-300 hover:text-primary hover:translate-x-1 py-2 text-gray-600 "
                            key={data.title}
                          >
                            <Link
                              onClick={() => window.scrollTo(0, 0)}
                              to={data.title}
                            >
                              <span className="pr-2">&#11162;</span>
                              <span>{data.title} </span>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
              {/* copyright */}
              <div className="bg-primary text-center h-[60px]  ">
                <hr />
                <p className="py-2 text-white">
                  @copyright 2024 All rights reserved || Made with ❤️ by Nitin
                  Kumar
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
