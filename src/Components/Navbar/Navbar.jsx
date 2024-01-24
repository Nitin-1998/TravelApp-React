import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import Popup from "../Popup/Popup";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];
//Navicon toggler
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    setMenu(!menu);
  };

  //Popup form
  const [ShowForm, setShowForm] = useState(false);
  const openPopup = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm =()=>{
    setShowForm(false)
  }



  return (
    <>
      <div className=" top-0 right-0 w-full shadow-md bg-white relative ">
        <div className="  bg-gradient-to-r from-primary to-secondary text-white">
          <div className="px-4 sm:text-sm text-xs  py-1 flex justify-between ">
            <p>20% off on your next booking</p>
            <p>+91 123 123 1234</p>
          </div>
        </div>

        {/* Navbar Section */}
        <div className="container">
          <div className="flex justify-between">
            {/* Logo Section */}
            <div>
              {/* Logo */}
              <Link to="/">
                <img
                  className="h-16"
                  src={Logo}
                  onClick={() => window.scrollTo(0, 0)}
                />
              </Link>
            </div>
            {/* Desktop Links */}
            <div className="hidden  md:flex items-center">
              <ul className="flex items-center gap-10">
                <li>
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/places"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown Section */}
                <li className="py-4 relative group cursor-pointer ">
                  {/* main heading */}
                  <div className="flex items-center gap-1  ">
                    <span>Quick Links</span>
                    <span>
                      <IoMdArrowDropdown className="text-2xl transition-all duration-200 group-hover:rotate-180 " />
                    </span>
                  </div>
                  {/* dropdown items */}
                  <div className="absolute -left-9 z-[9999] hidden  group-hover:block shadow-md text-black w-[150px] bg-white p-2  ">
                    <ul>
                      {DropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block  w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* Book now Button */}
            <div className="flex gap-2 items-center">
              <button
              onClick={openPopup}
              className=" py-1 px-3 bg-gradient-to-r from-primary to-secondary   rounded-2xl text-white hover:bg-gradient-to-l hover:from-primary hover:to-secondary transition-all duration-500  ">
                Book Now
              </button>

              {/* Popup form */}
              {ShowForm && <Popup closeForm={closeForm} /> }

              {/* Mobile hamburger icon */}
              <div className="md:hidden block">
                {menu ? (
                  <CiMenuBurger onClick={clickHandler} size={30} />
                ) : (
                  <CiMenuFries onClick={clickHandler} size={30} />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`${
              menu ? "left-0" : "left-[100%]"
            } lg:hidden  fixed flex flex-col   left-0 bottom-0 top-0 font-semibold text-xl text-start list-none pt-8 pb-4 gap-8 bg-white shadow-md  w-[70%] h-screen rounded-r-xl transition-all duration-300 pl-6 z-20 `}
          >
            {/* Navlinks */}

            <div className="flex gap-3 justify-start items-center text-gray-600">
              <div>
                <FaUserCircle className="" size={50} />
              </div>
              <div>
                <h1>Hello User</h1>
                <p>Premium user</p>
              </div>
            </div>

            <li>
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => setMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                activeClassName="active"
                onClick={() => setMenu(false)}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/places"
                activeClassName="active"
                onClick={() => setMenu(false)}
              >
                Best Places
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={() => setMenu(false)}
              >
                About
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
