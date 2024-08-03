// Availability.jsx
import React, { useState } from 'react';

const Availability = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded-lg">
        Availability
      </button>
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg mt-2">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="in-stock"
              checked={filters.availability === true}
              onChange={() => setFilters({ ...filters, availability: true })}
              className="mr-2"
            />
            <label htmlFor="in-stock">In Stock</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="out-of-stock"
              checked={filters.availability === false}
              onChange={() => setFilters({ ...filters, availability: false })}
              className="mr-2"
            />
            <label htmlFor="out-of-stock">Out of Stock</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Availability;
