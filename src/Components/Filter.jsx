// Filter.jsx
import React from 'react';

const Filter = ({ clearFilters }) => {
  return (
    <button onClick={clearFilters} className="bg-red-500 text-white px-4 py-2 rounded-lg">
      Clear All Filters
    </button>
  );
};

export default Filter;
