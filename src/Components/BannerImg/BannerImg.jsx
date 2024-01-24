import React from 'react'
import Banner from '../../assets/cover-women.jpg'

const BannerImg = () => {
  return (
    <>
        <div className='my-10' data-aos="zoom-in"
        data-aos-duration="900">
            <img className='h-[430px] w-full object-cover ' src={Banner}/>
        </div>
    </>
  )
}

export default BannerImg