// Rating.jsx
import React, { useState } from 'react';

const Rating = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleChange = (rating) => {
    setFilters({
      ...filters,
      rating: filters.rating.includes(rating)
        ? filters.rating.filter(r => r !== rating)
        : [...filters.rating, rating]
    });
  };

  return (
    <div>
      <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded-lg">
        Rating
      </button>
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg mt-2">
          {[5, 4, 3, 2, 1].map(rating => (
            <div key={rating} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`rating-${rating}`}
                checked={filters.rating.includes(rating)}
                onChange={() => handleChange(rating)}
                className="mr-2"
              />
              <label htmlFor={`rating-${rating}`}>{rating} Stars</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rating;
