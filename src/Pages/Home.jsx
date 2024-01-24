import React from "react";
import HeroVideo from "../assets/Videos/main.mp4";
import Hero from "../Components/Hero/Hero";
import Places from "../Components/Places/Places";
import BannerImg from "../Components/BannerImg/BannerImg";
import Blogs from "./Blogs";
import Banner from "../Components/Banner/Banner";
import BannerImg2 from "../Components/BannerImg/BannerImg2";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-screen">
          <video autoPlay muted loop className="absolute top-0 right-0 object-cover h-screen w-full z-[-1] ">
            <source src={HeroVideo} type="video/mp4" ></source>
          </video>
          <Hero />
        </div>
        <Places/>
        <BannerImg />
        <Blogs />
        <Banner />
        <BannerImg2 />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
