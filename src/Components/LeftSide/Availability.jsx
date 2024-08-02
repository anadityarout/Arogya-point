import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Availability = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='p-2 bg-white rounded-b-lg shadow'>
      <div className='flex justify-between items-center cursor-pointer' onClick={toggleVisibility}>
        <p className='text-lg font-semibold'>Availability</p>
        <RiArrowDropDownLine className={`transform transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isVisible && (
        <div className='mt-2'>
          {/* Add your availability options here */}
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            In Stock
          </label>
          <label className='flex items-center mb-2'>
            <input type="checkbox" className='mr-2' />
            Out of Stock
          </label>
        </div>
      )}
    </div>
  );
}

export default Availability;
