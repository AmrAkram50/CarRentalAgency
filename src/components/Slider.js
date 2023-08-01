import React from 'react';
import Slider from 'react-slick';
import image1 from '../1.png';
import image2 from '../2.png';
import { FaCar, FaDollarSign, FaHeadset, FaLaptop } from 'react-icons/fa';

const SlideShow = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <Slider  {...settings}>
        <div className='relative overflow-hidden w-full h-full'>
          <img src={image1} alt='image1' className='z-0 relative w-full h-full' />
          <div className='z-10 absolute bottom-0 w-full h-full bg-black opacity-40 grid grid-cols-2' />
          <span className='z-20 left-4 top-8 absolute w-1/2 p-8 text-[52px] text-white font-primary font-semibold'>
            Book Your <span className='text-red-600'>Car</span> Through Your App !
            <div className='flex flex-col text-[28px] py-4 text-white gap-2'>
              <div className='flex'><FaDollarSign className='mr-2 my-1.5 text-red-600'/><span className=''>Best Price Guaranteed</span></div>
              <div className='flex'><FaCar className='mr-2 my-1.5 text-red-600'/><span>Home Pickups</span></div>
              <div className='flex'><FaLaptop className='mr-2 my-1.5 text-red-600'/><span>Easy Bookings</span></div>
              <div className='flex'><FaHeadset className='mr-2 my-1.5 text-red-600'/><span>24/7 Support</span></div>
            </div>
            <button className='text-xl p-6 font-normal bg-black transition-all border-2 border-transparent hover:border-red-600'>FIND OUT MORE</button>
          </span>
        </div>
        <div className='relative overflow-hidden w-full h-full'>
          <img src={image2} alt='image2' className='z-0 relative w-full h-full' />
          <div className='z-10 absolute bottom-0 w-full h-full bg-black opacity-40 grid grid-cols-2' />
          <span className='z-20 left-4 top-8 absolute w-1/2 p-8 text-[52px] text-white font-primary font-semibold'>
            Book Your <span className='text-red-600'>Car</span> Through Your App !
            <div className='flex flex-col text-[28px] py-4 text-white gap-2'>
              <div className='flex'><FaDollarSign className='mr-2 my-1.5 text-red-600'/><span className=''>Best Price Guaranteed</span></div>
              <div className='flex'><FaCar className='mr-2 my-1.5 text-red-600'/><span>Home Pickups</span></div>
              <div className='flex'><FaLaptop className='mr-2 my-1.5 text-red-600'/><span>Easy Bookings</span></div>
              <div className='flex'><FaHeadset className='mr-2 my-1.5 text-red-600'/><span>24/7 Support</span></div>
            </div>
            <button className='text-xl p-6 font-normal bg-black transition-all border-2 border-transparent hover:border-red-600'>FIND OUT MORE</button>
          </span>
        </div>
      </Slider>
    </div>
  );
};

export default SlideShow;
