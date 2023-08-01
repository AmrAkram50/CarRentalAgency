import Luxury from '../Luxury.jpg'
import Mini from '../Mini.jpg'
import Porsche from '../Porsche.jpg'
import Mercedes from '../Mercedes.jpg'

const Category = () => {
    return(
        <div className="bg-gray-100 py-20 px-28 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Our <span className="text-5xl text-red-600">Category</span></h3>
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
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className='relative overflow-hidden group'>
                            <div className="z-10 absolute w-full h-full bg-black bg-opacity-40 text-white text-3xl font-semibold transition-all opacity-100 group-hover:duration-500 group-hover:bg-opacity-25">
                                <span className="absolute transition-all bottom-0 left-0 p-4 group-hover:-translate-y-7 group-hover:duration-500">LUXURY</span>
                                <span className="absolute transition-all -bottom-10 left-0 text-xl font-thin p-4 group-hover:-translate-y-9 group-hover:duration-700">1100 locations</span>
                            </div>
                            <img src={Luxury} alt='Luxury' className=" opacity-100 w-full h-full duration-500 transform-gpu group-hover:scale-110" />
                        </div>
                        <div className='relative overflow-hidden group'>
                            <div className="z-10 absolute w-full h-full bg-black bg-opacity-40 text-white text-3xl font-semibold transition-all opacity-100 group-hover:duration-500 group-hover:bg-opacity-25">
                                <span className="absolute transition-all bottom-0 left-0 p-4 group-hover:-translate-y-7 group-hover:duration-500">MINI</span>
                                <span className="absolute transition-all -bottom-10 left-0 text-xl font-thin p-4 group-hover:-translate-y-9 group-hover:duration-700">1250 locations</span>
                            </div>
                            <img src={Mini} alt='Luxury' className="opacity-100 w-full h-full duration-500 transform-gpu group-hover:scale-110" />
                        </div>
                    </div>
                    <div className='relative overflow-hidden group'>
                        <div className="z-10 absolute w-full h-full bg-black bg-opacity-40 text-white text-3xl font-semibold transition-all opacity-100 group-hover:duration-500 group-hover:bg-opacity-25">
                            <span className="absolute transition-all bottom-0 left-0 p-4 group-hover:-translate-y-7 group-hover:duration-500">PORSCHE</span>
                            <span className="absolute transition-all -bottom-10 left-0 text-xl font-thin p-4 group-hover:-translate-y-9 group-hover:duration-700">1550 locations</span>
                        </div>
                        <img src={Porsche} alt='Luxury' className="opacity-100 w-full h-full duration-500 transform-gpu group-hover:scale-110" />
                    </div>
                </div>
                <div className='relative overflow-hidden group'>
                    <div className="z-10 absolute w-full h-full bg-black bg-opacity-40 text-white text-3xl font-semibold transition-all opacity-100 group-hover:duration-500 group-hover:bg-opacity-25">
                        <span className="absolute transition-all bottom-0 left-0 p-4 group-hover:-translate-y-7 group-hover:duration-500">MERCEDES</span>
                        <span className="absolute transition-all -bottom-10 left-0 text-xl font-thin p-4 group-hover:-translate-y-9 group-hover:duration-700">1150 locations</span>
                    </div>
                    <img src={Mercedes} alt='Luxury' className="opacity-100 w-full h-full duration-500 transform-gpu group-hover:scale-110" />
                </div>
            </div>
        </div>
    );
}

export default Category;