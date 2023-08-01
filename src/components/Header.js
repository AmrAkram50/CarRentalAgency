import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return(
        <header className="flex justify-between text-2xl bg-red-600">
            <div className="h-full px-4 mx-16 py-6 text-white font-semibold">
                <button><FontAwesomeIcon className='mx-1.5' icon={faFacebook} /></button>
                <button><FontAwesomeIcon className='mx-1.5' icon={faInstagram} /></button>
                <button><FontAwesomeIcon className='mx-1.5' icon={faTwitter} /></button>
                <button><FontAwesomeIcon className='mx-1.5' icon={faLinkedin} /></button>
            </div>
            <button className="bg-black text-white h-full px-4 mx-16 py-6">
                Booking Now
            </button>
        </header>
    )   
}
export default Header;