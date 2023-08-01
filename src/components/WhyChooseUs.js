import PersonalizedService from '../PersonalizedService.png';
import Support from '../Support.png';
import BestPrice from '../BestPrice.jpg';
import TrustedCompany from '../TrustedCompany.png';

const WhyChooseUs = () => {
    return(
        <div className="bg-gray-100 py-20 px-28 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h3 className="text-5xl font-primary font-medium">Why <span className="text-5xl text-red-600">Choose Us</span></h3>
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
            <div className='grid grid-cols-2 gap-4'>
                <div className='relative overflow-hidden group  h-full w-full'>
                    <div className='z-10 absolute p-6 bottom-0 max-h-[100px] h-full w-full bg-gradient-to-t from-black to-transparent text-white font-primary font-bold text-4xl '>Personalized Service</div>
                    <img src={PersonalizedService} alt='Service' className='z-0 relative h-full w-full transition-all duration-500 group-hover:scale-110' />
                </div>
                <div className='relative overflow-hidden group h-full w-full'>
                    <div className='z-10 absolute p-6 bottom-0 max-h-[100px] h-full w-full bg-gradient-to-t from-black to-transparent text-white font-primary font-bold text-4xl '>24/7 Support</div>
                    <img src={Support} alt='Support' className='relative h-full w-full transition-all duration-500 group-hover:scale-110' />
                </div>
                <div className='relative overflow-hidden group h-full w-full'>
                    <div className='z-10 absolute p-6 bottom-0 max-h-[100px] h-full w-full bg-gradient-to-t from-black to-transparent text-white font-primary font-bold text-4xl '>Best Price</div>
                    <img src={BestPrice} alt='Price' className='relative h-full w-full transition-all duration-500 group-hover:scale-110' />
                </div>
                <div className='relative overflow-hidden group h-full w-full'>
                    <div className='z-10 absolute p-6 bottom-0 max-h-[100px] h-full w-full bg-gradient-to-t from-black to-transparent text-white font-primary font-bold text-4xl '>Trusted Company</div>
                    <img src={TrustedCompany} alt='Trust' className='relative h-full w-full transition-all duration-500 group-hover:scale-110' />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;