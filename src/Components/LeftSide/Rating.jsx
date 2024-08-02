import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Rating = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='bg-white p-2 mb-1 rounded shadow'>
      <div className='flex justify-between items-center cursor-pointer' onClick={toggleVisibility}>
        <p className='text-lg font-semibold'>Rating</p>
        <RiArrowDropDownLine className={`transform transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isVisible && (
        <div className='mt-2'>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400 mr-2' />
            & up
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400 mr-2' />
            & up
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            <FaStar className='text-orange-400' />
            <FaStar className='text-orange-400 mr-2' />
            & up
          </label>
          <label className='flex items-center'>
            <input type="checkbox" className='mr-2' />
            <FaStar className='text-orange-400 mr-2' />
            & up
          </label>
        </div>
      )}
    </div>
  );
}

export default Rating;
