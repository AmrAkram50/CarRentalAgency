import background from '../SearchBackground.jpg';
import {FiCalendar} from 'react-icons/fi';
import { useState } from 'react';
const Search = () => {
    const divStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const [adultsSelectedOption, setAdultsSelectedOption] = useState('');
    const adultsOptions = [
        { value: '01', label: '01' },
        { value: '02', label: '02' },
    ];
    const [kidsSelectedOption, setKidsSelectedOption] = useState('');
    const kidsOptions = [
        { value: '01', label: '01' },
        { value: '02', label: '02' },
    ];
    const handleAdultsSelectChange = (event) => {
        setAdultsSelectedOption(event.target.value);
    };
    const handleKidsSelectChange = (event) => {
        setKidsSelectedOption(event.target.value);
    };

    const [pickupDateTime , setPickupDateTime] = useState('');
    const pickupDateTimeOptions = [
        {value: 'Anytime' , label: 'Anytime'},
        {value: 'Morning' , label: 'Morning'},
    ]
    const handlePickupDateTimeChange = (event) => {
        setPickupDateTime(event.target.value);
    }
    const [dropoffDateTime , setDropoffDateTime] = useState('');
    const dropoffDateTimeOptions = [
        {value: 'Anytime' , label: 'Anytime'},
        {value: 'Morning' , label: 'Morning'},
    ]
    const handleDropoffDateTimeChange = (event) => {
        setDropoffDateTime(event.target.value);
    }
    
    const [carType , setCarType] = useState('');
    const carTypeOptions = [
        {value: 'Compact' , label: 'Compact'},
        {value: 'Economy' , label: 'Economy'},
    ]
    const handleCarTypeChange = (event) => {
        setCarType(event.target.value);
    }
    return(
        <div style={divStyle} className='h-full w-full'>
            <div className='grid grid-cols-4 gap-4 px-32 py-16 text-lg text-white'>
                <div className=''>
                    <div className='font-semibold'>Pick Up</div>
                    <input type='text' placeholder='city, district or specific airport' className='text-black px-2 py-1 border-4 border-red-600 w-full
                    focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'></input>
                </div>
                <div className=''>
                    <div className='font-semibold'>Drop Off</div>
                    <input type='text' placeholder='city, district or specific airport' className='text-black px-2 py-1 border-4 border-red-600 w-full
                    focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'></input>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className=''>
                        <div className='font-semibold'>Adults</div>
                        <select value={adultsSelectedOption} onChange={handleAdultsSelectChange} className='block text-black px-2 py-1.5 border-4 border-red-600 w-full
                        focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'>
                                    {adultsOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                    ))}
                        </select>
                    </div>
                    <div className=''>
                        <div className='font-semibold'>Kids</div>
                        <select value={kidsSelectedOption} onChange={handleKidsSelectChange} className='block text-black px-2 py-1.5 border-4 border-red-600 w-full
                        focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'>
                                    {kidsOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                    ))}
                        </select>
                    </div>
                </div>
                <div className=''>
                    <div className='font-semibold'>Promocode</div>
                    <input type='text' placeholder='type here' className='text-black px-2 py-1 border-4 border-red-600 w-full
                    focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'></input>
                </div>
                <div className=''>
                    <div className='font-semibold'>Pick Up Date/Time</div>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <input type='text' placeholder='mm/dd/yy' className='text-black px-2 py-1 border-4 border-red-600 max-w-[110px]
                            focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'/>
                            <FiCalendar className='bg-red-600 text-white text-3xl w-auto px-1 h-full'/>
                        </div>
                        <div>
                            <select value={pickupDateTime} onChange={handlePickupDateTimeChange} className='block text-black px-2 py-1.5 border-4 border-red-600 w-full
                            focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'>
                                {pickupDateTimeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='font-semibold'>Drop Off Date/Time</div>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <input type='text' placeholder='mm/dd/yy' className='text-black px-2 py-1 border-4 border-red-600 max-w-[110px]
                            focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'/>
                            <FiCalendar className='bg-red-600 text-white text-3xl w-auto px-1 h-full'/>
                        </div>
                        <div>
                            <select value={dropoffDateTime} onChange={handleDropoffDateTimeChange} className='block text-black px-2 py-1.5 border-4 border-red-600 w-full
                            focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'>
                                {dropoffDateTimeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='font-semibold'>Car Type</div>
                    <div>
                            <select value={carType} onChange={handleCarTypeChange} className='block text-black px-2 py-1.5 border-4 border-red-600 w-full
                            focus:border-l-transparent focus:border-t-transparent focus:border-r-transparent focus:outline-none'>
                                {carTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className=''>
                    <br/>
                    <button className='font-semibold bg-red-600 justify-center py-1.5 border-2
                    border-red-600 w-full hover:bg-red-700 hover:border-red-700 hover:transition-all'>Search</button>
                </div>
            </div>
        </div>
    );
}
export default Search;