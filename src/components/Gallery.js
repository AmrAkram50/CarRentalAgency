import Gallery1 from '../Gallery1.jpg';
import Gallery2 from '../Gallery2.jpg';
import Gallery3 from '../Gallery3.jpg';
import Gallery4 from '../Gallery4.jpg';
import Gallery5 from '../Gallery5.jpg';
import Gallery6 from '../Gallery6.jpg';
import Gallery7 from '../Gallery7.jpg';
import Gallery8 from '../Gallery8.jpg';
import Gallery9 from '../Gallery9.jpg';
import Gallery10 from '../Gallery10.jpg';
import Gallery11 from '../Gallery11.jpg';
import Gallery12 from '../Gallery12.jpg';
import { FiZoomIn } from 'react-icons/fi';

const Gallery = () => {
    return(
        <div className="py-20 px-28 flex flex-col gap-10 bg-white">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Our <span className="text-5xl text-red-600">Gallery</span></h3>
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
            <div className="flex justify-center items-center gap-4 text-xl ">
                <button className="relative overflow-hidden p-4 max-w-[180px] w-full border-b-4 border-red-600 group">
                    <div className="z-0 absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                    <div className="z-1 absolute top-0 left-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full " />
                    <div className="relative z-10 bg-transparent w-full transition-colors duration-700 group-hover:text-white">Show All</div>
                </button>
                <button className="relative overflow-hidden p-4 max-w-[180px] w-full border-b-4 border-red-600 group">
                    <div className="z-0 absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                    <div className="z-1 absolute top-0 left-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full " />
                    <div className="relative z-10 bg-transparent w-full transition-colors duration-700 group-hover:text-white">Brakes</div>
                </button>
                <button className="relative overflow-hidden p-4 max-w-[180px] w-full border-b-4 border-red-600 group">
                    <div className="z-0 absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                    <div className="z-1 absolute top-0 left-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full " />
                    <div className="relative z-10 bg-transparent w-full transition-colors duration-700 group-hover:text-white">Suspension</div>
                </button>
                <button className="relative overflow-hidden p-4 max-w-[180px] w-full border-b-4 border-red-600 group">
                    <div className="z-0 absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                    <div className="z-1 absolute top-0 left-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full " />
                    <div className="relative z-10 bg-transparent w-full transition-colors duration-700 group-hover:text-white">Wheels</div>
                </button>
                <button className="relative overflow-hidden p-4 max-w-[180px] w-full border-b-4 border-red-600 group">
                    <div className="z-0 absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-300 group-hover:w-full" />
                    <div className="z-1 absolute top-0 left-0 w-0 h-full bg-black transition-all duration-700 group-hover:w-full " />
                    <div className="relative z-10 bg-transparent w-full transition-colors duration-700 group-hover:text-white">Steering</div>
                </button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery1} alt='Gallery1' className='relative z-0 w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery2} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery3} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery4} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery5} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery6} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery7} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery8} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery9} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery10} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery11} alt='Gallery1' className='w-full h-full'/>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className='flex items-center justify-center z-10 absolute max-w-[calc(100%-20px)] max-h-[calc(100%-20px)] m-2.5 opacity-90 w-0 h-full bg-red-600 transition-all duration-700 group-hover:w-full'>
                        <FiZoomIn className='text-white text-3xl'/>
                    </div>
                    <img src={Gallery12} alt='Gallery1' className='w-full h-full'/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;