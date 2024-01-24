import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className=" flex flex-col ">
            <p className="text-primary text-center">What Our Customers say</p>
            <h1 className="text-3xl font-bold text-center">Testimonials</h1>
            <div>
              <p className="text-center text-gray-600 text-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nesciunt explicabo a! Laborum delectus aliquam labore, earum
                rerum quam! Nulla?
              </p>
            </div>
          </div>

          <div className="py-8">
            <TestimonialsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
