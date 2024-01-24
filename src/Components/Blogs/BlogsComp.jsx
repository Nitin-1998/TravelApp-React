import React from "react";
import BlogsCompCards from "./BlogsCompCards";

const BlogsComp = () => {
  return (
    <>
      <div className="  ">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="container pt-10 pb-4"
        >
          <h1 className=" border-l-8 h-12 border-secondary pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
        </div>
        <div>
          <BlogsCompCards />
        </div>
      </div>
    </>
  );
};

export default BlogsComp;
