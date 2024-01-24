import React from "react";
import  Location  from "../Components/Location/Location.jsx";

const About = () => {
  return (
    <>
      <main>
        <div className="container py-10">
          <div className="">
            <h1 className="  border-l-8 h-12 mb-4 border-secondary pl-2 text-3xl font-bold">
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              ab facilis dicta dolores est quisquam qui doloribus necessitatibus
              molestias esse saepe sit, deserunt numquam possimus non. Repellat
              ab recusandae sint ad, et explicabo saepe. Corporis ratione
              debitis quibusdam vitae, praesentium adipisci eius veniam earum
              dolorum sint totam omnis cupiditate tenetur eveniet aliquam. Quam
              perferendis, ratione consectetur itaque at quaerat ipsam?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              consectetur iste ad voluptatem repellendus illo vitae, animi
              laudantium reiciendis natus aperiam odit possimus distinctio
              accusamus at quisquam cumque doloremque suscipit porro
              perferendis, ipsam magni. At ut officia illum porro delectus.
            </p>
          </div>
          <div className="container py-10">
            <h1 className="  border-l-8 h-12 mb-4 border-secondary pl-2 text-3xl font-bold">
              Location to Visit
            </h1>
            <div>
            <Location />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;

