'use client'
import { DatePicker } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { IoBedOutline } from 'react-icons/io5';
const { RangePicker } = DatePicker;

export default function HomePage() {
    const [search, setSearch] = useState(false);
    const [size, setSize] = useState('middle');
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState(['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu']);
    const dropdownRef = useRef(null);

    const handleSearch = () => {
        setSearch(true);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setSearch(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSearch(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSearch(false);
    };

    return (
        <div className='bg-[url(/home1.jpg)] h-[70vh] bg-fixed bg-cover bg-no-repeat'>
            <div className='flex justify-center items-start flex-col px-36 h-full backdrop-brightness-50 gap-2'>

                <div>
                    <h1 className='text-4xl text-white font-bold'>Find Hotels in Nigeria</h1>
                    <p className='text-sm text-white font-bold'>Discover (13,259) hotels and more in Nigeria. Enter your dates to find your stay!</p>
                </div>

                <form className='flex justify-center h-[10%] gap-1 w-fit relative'>
                    <div onClick={() => handleSearch()} className='bg-white flex items-center justify-start gap-2 px-3 w-[40%] rounded-md relative' ref={dropdownRef}>
                        <IoBedOutline className='text-3xl text-[#818385]' />
                        <input
                            className='outline-none text-sm w-full h-[80%] bg-transparent'
                            autoComplete='off'
                            type="text"
                            name="location"
                            id="location"
                            placeholder='Where are you going?'
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        {search && (
                            <div className='absolute top-[110%] w-[100%] left-0 bg-white shadow-lg rounded-md p-2 z-10'>
                                {suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase())).map((suggestion, index) => (
                                    <div key={index} onClick={() => handleSuggestionClick(suggestion)} className='cursor-pointer px-2 py-2 hover:bg-gray-200 rounded-md text-sm'>
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <span className='w-fit'>
                        <RangePicker
                            size={size}
                            placeholder={['Check-Out', 'Check-In']}
                            className='w-[80%] h-full outline-none border-none flex flex-row-reverse gap-4 text-[#818385] font-bold'
                        />
                    </span>
                </form>
            </div>
        </div>
    );
}
