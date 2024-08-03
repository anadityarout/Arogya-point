// Price.jsx
import React, { useState } from 'react';

const Price = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(filters.price.min);
  const [maxPrice, setMaxPrice] = useState(filters.price.max);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleApply = () => {
    setFilters({ ...filters, price: { min: Number(minPrice), max: Number(maxPrice) } });
  };

  return (
    <div>
      <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded-lg">
        Price Range
      </button>
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg mt-2">
          <div className="flex items-center mb-2">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
              className="border border-gray-300 p-2 rounded-l-lg w-1/2"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
              className="border border-gray-300 p-2 rounded-r-lg w-1/2"
            />
          </div>
          <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default Price;
