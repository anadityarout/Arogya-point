// Discount.jsx
import React, { useState } from 'react';

const Discount = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleChange = (discount) => {
    setFilters({
      ...filters,
      discount: filters.discount.includes(discount)
        ? filters.discount.filter(d => d !== discount)
        : [...filters.discount, discount]
    });
  };

  return (
    <div>
      <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded-lg">
        Discount
      </button>
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg mt-2">
          {[10, 20, 30, 40, 50, 60].map(discount => (
            <div key={discount} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`discount-${discount}`}
                checked={filters.discount.includes(discount)}
                onChange={() => handleChange(discount)}
                className="mr-2"
              />
              <label htmlFor={`discount-${discount}`}>{discount}% or more</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Discount;
