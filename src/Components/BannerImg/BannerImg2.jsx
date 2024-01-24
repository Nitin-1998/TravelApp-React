import React from 'react'
import img from "../../assets/Banner/travel-cover2.jpg"

const BannerImg2 = () => {
  return (
    <>
        <div data-aos="zoom-in" data-aos-duration="700" className='my-10'>
            <img className='object-cover h-[450px]  w-screen ' src={img} />
        </div>
    </>
  )
}

export default BannerImg2