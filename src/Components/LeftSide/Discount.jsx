import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Discount = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='bg-white p-2 mb-1 rounded shadow'>
      <div className='flex justify-between items-center cursor-pointer' onClick={toggleVisibility}>
        <p className='text-lg font-semibold'>Discount</p>
        <RiArrowDropDownLine className={`transform transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isVisible && (
        <div className='mt-2'>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            10% or more
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            20% or more
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            30% or more
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            40% or more
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            50% or more
          </label>
          <label className='flex items-center'>
            <input type="checkbox" className='mr-2' />
            60% or more
          </label>
        </div>
      )}
    </div>
  );
}

export default Discount;
