import React from "react";
import img1 from "../../assets/Places/boat.jpg";
import img2 from "../../assets/Places/place4.jpg";
import img3 from "../../assets/Places/place5.jpg";
import img4 from "../../assets/Places/place6.jpg";
import img5 from "../../assets/Places/tajmahal.jpg";
import img6 from "../../assets/Places/water.jpg";

import { MdOutlinePlace } from "react-icons/md";

const myData = [
  {
    id: 1,
    name: "Boat Tour",
    img: `${img1}`,
    country: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
  {
    id: 2,
    name: "Sydney",
    img: `${img2}`,
    country: "Australia",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
  {
    id: 3,
    name: "Los Angeles",
    img: `${img3}`,
    country: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
  {
    id: 4,
    name: "Las Vegas",
    img: `${img4}`,
    country: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
  {
    id: 5,
    name: "Taj Mahal",
    img: `${img5}`,
    country: "India",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
  {
    id: 6,
    name: "Boat Tour",
    img: `${img6}`,
    country: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    bottomData: "Cultural Relax",
    amount: "$100",
  },
];

const PlacesCard = () => {
  return (
    <>
      <div className="container w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {myData.map((data) => {
          {
            /* console.warn(data); */
          }

          return (
            <div className=" shadow-md text-gray-600">
              <div>
                <div key={data.id}>
                  {/* image */}
                  <div className="overflow-hidden">
                    <img className="h-[220px] w-full object-cover transition duration-700 hover:scale-110 hover:skew-x-2  " src={data.img} />
                  </div>
                  {/* body */}
                  <div className="py-2 px-3">
                    <h1 className="text-2xl text-black font-semibold">{data.name}</h1>
                    <div className="flex items-center gap-1" >
                      <h2 className="">
                        <MdOutlinePlace />
                      </h2>
                      <h2>{data.country}</h2>
                    </div>
                    <div>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <hr className=" mx-auto w-[90%]" />
                  {/* footer */}
                  <div className="flex px-4 py-2 justify-between">
                    <h1>{data.bottomData}</h1>
                    <h1 className="text-black font-semibold text-2xl">{data.amount}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PlacesCard;
