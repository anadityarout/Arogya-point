import React from 'react';

const Filter = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-20 mb-1 p-2 bg-white rounded-t-lg shadow'>
        <div className='text-lg font-semibold'>FILTERS</div>
        <div>
          <button className='text-blue-500 opacity-50 hover:opacity-100 transition-opacity'>
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;