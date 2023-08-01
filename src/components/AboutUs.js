import background from '../SearchBackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    const divStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return(
        <div style={divStyle} className='h-fit w-full '>
            <div className='grid grid-cols-3 px-28 py-16'>
                <div className='flex flex-col text-white'>
                    <h2 className=' text-3xl font-primary font-semibold'>About Us</h2>
                    <svg width="100%" height="2" className='my-4'>
                        <line x1="0%" y1="0" x2="20%" y2="0" stroke="white" strokeWidth="3" />
                    </svg>
                    <span className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet...
                    </span>
                </div>
                <div className='flex flex-col text-white'>
                    <h2 className=' text-3xl font-primary font-semibold'>About Us</h2>
                    <svg width="100%" height="2" className='my-4'>
                        <line x1="0%" y1="0" x2="20%" y2="0" stroke="white" strokeWidth="3" />
                    </svg>
                    <span className='text-xl py-2'>-1-567-124-44227</span>
                    <span className='text-xl py-2'>-182 main street pert habour 8007</span>
                    <span className='text-xl py-2'>-Mon-sat 8:00-18:00 Sunday Closed</span>
                    <div className="h-full px-4 flex justify-between mr-28 py-6 text-white font-semibold">
                        <button className='text-3xl hover:text-red-600 transition-all duration-300'><FontAwesomeIcon icon={faFacebook} /></button>
                        <button className='text-3xl hover:text-red-600 transition-all duration-300'><FontAwesomeIcon icon={faInstagram} /></button>
                        <button className='text-3xl hover:text-red-600 transition-all duration-300'><FontAwesomeIcon icon={faTwitter} /></button>
                        <button className='text-3xl hover:text-red-600 transition-all duration-300'><FontAwesomeIcon icon={faLinkedin} /></button>
                    </div>
                </div>
                <div className='flex flex-col text-white'>
                    <h2 className=' text-3xl font-primary font-semibold'>Newsletter</h2>
                    <svg width="100%" height="2" className='my-4'>
                        <line x1="0%" y1="0" x2="20%" y2="0" stroke="white" strokeWidth="3" />
                    </svg>
                    <span className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
                    <input type='text' className='w-full border-2 border-red-600 my-5 p-2 focus:outline-none text-black' placeholder='Email ID'></input>
                    <button className='w-full my-1 p-3 text-white bg-red-600'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
 
export default AboutUs;