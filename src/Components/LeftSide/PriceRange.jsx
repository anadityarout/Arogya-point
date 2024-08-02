import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { RiArrowDropDownLine } from "react-icons/ri";

const PriceRange = () => {
    const [priceRange, setPriceRange] = useState([1, 5000]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSliderChange = (value) => {
        setPriceRange(value);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className='bg-white p-2 mb-1'>
                <h1 className='flex justify-between items-center font-semibold'>
                Price
                    <button onClick={toggleVisibility} className='flex items-center'>
                        <RiArrowDropDownLine className={`transform transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                </h1>

                {isVisible && (
                    <div className='mt-4'>
                        {/* Slider */}
                        <Slider
                            range
                            min={1}
                            max={500}
                            value={priceRange}
                            onChange={handleSliderChange}
                            className='mb-4 mt-4'
                        />

                        <div className="flex justify-between mb-3">
                            <div className="flex items-center border-2 border-zinc-300 rounded">
                                <span className="mr-2 text-zinc-400">₹</span>
                                <input
                                    type="number"
                                    min="1"
                                    max="500"
                                    value={priceRange[0]}
                                    onChange={(e) => handleSliderChange([Math.min(e.target.value, priceRange[1]), priceRange[1]])}
                                    className="w-16 p-2"
                                />
                            </div>
                            <span className="mx-2 mt-2">to</span>
                            <div className="flex items-center border-2 border-zinc-300 rounded">
                                <span className="mr-2 text-zinc-400">₹</span>
                                <input
                                    type="number"
                                    min="1"
                                    max="500"
                                    value={priceRange[1]}
                                    onChange={(e) => handleSliderChange([priceRange[0], Math.max(e.target.value, priceRange[0])])}
                                    className="w-16 p-2"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PriceRange;