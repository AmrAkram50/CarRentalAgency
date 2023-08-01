import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blog1 from '../Blog1.jpg';
import Blog2 from '../Blog2.jpg';
import Blog3 from '../Blog3.jpg';
import Blog4 from '../Blog4.jpg';
import Blog5 from '../Blog5.jpg';
import Blog6 from '../Blog6.jpg';
import {FaCommentDots} from 'react-icons/fa';
import {AiFillLike} from 'react-icons/ai';

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return(
        <div className="py-20 px-28 flex flex-col gap-10 bg-gray-50">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Our <span className="text-5xl text-red-600">Blog</span></h3>
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
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog1} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>21</div>
                            <div className='w-full p-1 bg-black text-white'>FEB 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog2} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>18</div>
                            <div className='w-full p-1 bg-black text-white'>MAR 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog3} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>05</div>
                            <div className='w-full p-1 bg-black text-white'>MAY 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog4} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>26</div>
                            <div className='w-full p-1 bg-black text-white'>JAN 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog5} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>9</div>
                            <div className='w-full p-1 bg-black text-white'>FEB 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
                <div className='p-2 flex flex-col bg-white shadow-xl'>
                    <div className='relative overflow-hidden group'>
                        <img src={Blog6} alt="Blog 1" className='z-0 w-full transition-all duration-500 group-hover:scale-110'/>
                        <div className='absolute top-3 left-3 z-10 flex flex-col'>
                            <div className='bg-red-600 w-full text-[42px] text-center text-white font-semibold'>13</div>
                            <div className='w-full p-1 bg-black text-white'>JUL 2023</div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between my-2 px-2'>
                        <div className='flex group'>
                            <FaCommentDots size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 group-hover:text-black transition-all duration-150'>2 Comments</span>
                        </div>
                        <div className='flex group'>
                            <AiFillLike size={24} className="mr-2 text-red-600" />
                            <span className='text-slate-500 py-0.5 group-hover:text-black transition-all duration-150'>26 Likes</span>
                        </div>
                    </div>
                    <div className='w-full px-3'>
                        <h4 className='font-semibold py-2 text-2xl font-primary'>Fact Car Rental Can Cost.</h4>
                        <span className='text-gray-500 py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </span>
                    </div>
                    <div className='flex justify-between p-3'>
                        <span className='font-light italic'>Posted by Vanessa Simpson</span>
                        <button className='relative overflow-hidden group w-fit bg-red-600 border-2 border-red-600 text-white px-2'>
                            <span className='relative z-10 bg-transparent'>READ MORE</span>
                            <div className='z-2 w-0 h-full bg-black absolute left-0 bottom-0 transition-all duration-500 group-hover:w-full' />    
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Blog;