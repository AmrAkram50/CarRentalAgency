import TireAndWheel from '../TireAndWheel.jpg';
import BrakeRepair from '../BrakeRepair.jpg';
import LubeOilAndFilters from '../LubeOilAndFilters.jpg';
import EngineDiagnostics from '../EngineDiagnostics.jpg';

const Services = () => {
    return(
        <div className="bg-gray-100 py-20 px-28 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Our <span className="text-5xl text-red-600">Services</span></h3>
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
            <div className="flex gap-4 max-h-[450px] h-full">
                <div className='relative overflow-hidden flex flex-col group'>
                    <div className='z-10 flex flex-col absolute w-0 h-full right-0 top-0 border-t-4 border-red-600 transition-all duration-500 bg-white group-hover:w-full'>
                        <div className='w-full justify-center text-center p-8 font-semibold font-primary text-xl'>TIRE AND WHEEL</div>
                        <div className='w-full text-center justify-center p-4 font-primary text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text.
                        </div>
                        <div className='flex items-center justify-center p-4 w-full'>
                            <button className='p-4 bg-black text-white font-primary max-w-[150px] w-full hover:border-2 hover:border-red-600'>SEE ALL</button>
                        </div>
                    </div>
                    <img src={TireAndWheel} alt='Tire And Wheel' className='z-0 w-full h-full' />
                    <div className='z-0 flex items-center text-center justify-center font-primary font-semibold text-xl p-3'>TIRE AND WHEEL</div>
                </div>
                <div className='relative overflow-hidden flex flex-col group'>
                    <div className='z-10 flex flex-col absolute w-0 h-full right-0 top-0 border-t-4 border-red-600 transition-all duration-500 bg-white group-hover:w-full'>
                        <div className='w-full justify-center text-center p-8 font-semibold font-primary text-xl'>BRAKE REPAIR</div>
                            <div className='w-full text-center justify-center p-4 font-primary text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text.
                            </div>
                            <div className='flex items-center justify-center p-4 w-full'>
                                <button className='p-4 bg-black text-white font-primary max-w-[150px] w-full hover:border-2 hover:border-red-600'>SEE ALL</button>
                            </div>
                        </div>
                        <img src={BrakeRepair} alt='BRAKE REPAIR' className='z-0 w-full h-full' />
                        <div className='z-0 flex items-center text-center justify-center font-primary font-semibold text-xl p-3'>BRAKE REPAIR</div>
                </div>
                <div className='relative overflow-hidden flex flex-col group'>
                    <div className='z-10 flex flex-col absolute w-0 h-full right-0 top-0 border-t-4 border-red-600 transition-all duration-500 bg-white group-hover:w-full'>
                        <div className='w-full justify-center text-center p-8 font-semibold font-primary text-xl'>LUBE, OIL AND FILTERS</div>
                            <div className='w-full text-center justify-center p-4 font-primary text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text.
                            </div>
                            <div className='flex items-center justify-center p-4 w-full'>
                                <button className='p-4 bg-black text-white font-primary max-w-[150px] w-full hover:border-2 hover:border-red-600'>SEE ALL</button>
                            </div>
                    </div>
                    <img src={LubeOilAndFilters} alt='LUBE, OIL AND FILTERS' className='z-0 w-full h-full' />
                    <div className='z-0 flex items-center text-center justify-center font-primary font-semibold text-xl p-3'>LUBE, OIL AND FILTERS</div>
                </div>
                <div className='relative overflow-hidden flex flex-col group'>
                    <div className='z-10 flex flex-col absolute w-0 h-full right-0 top-0 border-t-4 border-red-600 transition-all duration-500 bg-white group-hover:w-full'>
                        <div className='w-full justify-center text-center p-8 font-semibold font-primary text-xl'>ENGINE DIAGNOSTICS</div>
                            <div className='w-full text-center justify-center p-4 font-primary text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text.
                            </div>
                            <div className='flex items-center justify-center p-4 w-full'>
                                <button className='p-4 bg-black text-white font-primary max-w-[150px] w-full hover:border-2 hover:border-red-600'>SEE ALL</button>
                            </div>
                    </div>
                    <img src={EngineDiagnostics} alt='ENGINE DIAGNOSTICS' className='z-0 w-full h-full' />
                    <div className='z-0 flex items-center text-center justify-center font-primary font-semibold text-xl p-3'>ENGINE DIAGNOSTICS</div>
                </div>
            </div>
        </div>
    )
}
export default Services;