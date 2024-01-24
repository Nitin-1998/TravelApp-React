import React from "react";
import img1 from "../../assets/testimonial/image1.jpg";
import img2 from "../../assets/testimonial/image2.jpg";
import img3 from "../../assets/testimonial/image3.jpg";
import img4 from "../../assets/testimonial/image4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardData = [
  {
    id: 1,
    img: `${img1}`,
    name: "Rollins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
  },
  {
    id: 1,
    img: `${img2}`,
    name: "Gray",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
  },
  {
    id: 2,
    img: `${img3}`,
    name: "Rose",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
  },
  {
    id: 3,
    img: `${img4}`,
    name: "Olly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.",
  },
];

const TestimonialsCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

  };
  return (
    <>
      <div className="container">
        <div className="  mx-auto my-4    ">
          <Slider {...settings}>
            {CardData.map((data) => {
              return (
                <>
                  <div
                    className="bg-[#e5f3f6]     relative shadow-md rounded-xl  p-4"
                    key={data.id}
                  >
                    {/* Image */}
                    <div className="flex justify-center">
                      <img className="h-24 w-24 rounded-full" src={data.img} />
                    </div>
                    <div className="py-4 text-center">
                      <h1 className="text-2xl font-bold">{data.name}</h1>
                      <p className="">{data.description}</p>
                      <p className=" text-9xl font-serif text-gray-300 top-0 right-0 absolute">
                        ,,
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
