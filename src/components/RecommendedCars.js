import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Car1 from '../Car1.png';
import Car2 from '../Car2.png';
import Car3 from '../Car3.png';
import Car4 from '../Car4.png';
import Car5 from '../Car5.png';
import Car6 from '../Car6.png';
import Car7 from '../Car7.png';
import Car8 from '../Car8.png';
import Car9 from '../Car9.png';

const RecommendedCars = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return(
        <div className="py-20 px-28 flex flex-col gap-10 bg-white">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Recommended <span className="text-5xl text-red-600">Cars</span></h3>
                </div>
                <div className="py-4">
                    <svg width="100%" height="1">
                        <line x1="30%" y1="0" x2="70%" y2="0" stroke="red" strokeWidth="3" />
                    </svg>
                </div>
                <p className="max-w-[640px] text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </div>
            <Slider autoplay={true} {...settings}>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car1} alt="Car 1" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Compact</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$20.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                            <img className=' transition-all duration-700 group-hover:scale-110' src={Car2} alt="Car 2" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Full Size</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$18.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car3} alt="Car 3" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Compact</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$20.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car4} alt="Car 4" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Economy</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$22.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car5} alt="Car53" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Luxury</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$24.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car6} alt="Car 6" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Premium</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$12.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car7} alt="Car 7" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Mini Car</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$46.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car8} alt="Car 8" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Van</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$23.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <div className='overflow-hidden w-full h-fit group'>
                        <img className=' transition-all duration-700 group-hover:scale-110' src={Car9} alt="Car 9" />
                    </div>
                    <div className='flex justify-between py-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl text-black font-semibold font-primary'>Mini Van</span>
                            <span className='text-sm text-slate-500'>PER DAY</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-500'>FROM</span>
                            <span className='text-red-600 text-xl'>$12.00</span>
                        </div>
                    </div>
                    <div>
                        <span>Grate explorer of tha truth tha master-bulder of human happines.</span>
                    </div>
                    <div className='flex justify-between py-4'>
                        <button className='border-2 border-transparent text-xl py-1.5 px-6 bg-black text-white hover:border-red-600'>
                            View
                        </button>
                        <button className='relative bg-red-600 border-2 border-red-600 py-1.5 px-6 overflow-hidden group'>
                            <div className='z-0 absolute top-0 left-0 h-full w-0 bg-black transition-all duration-700 group-hover:w-full ' />
                            <div className='relative z-10 bg-transparent text-white text-xl'>Book</div>
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default RecommendedCars;