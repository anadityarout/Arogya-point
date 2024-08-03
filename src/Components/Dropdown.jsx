// Dropdown.jsx
import React, { useState } from 'react';

const Dropdown = ({ setSortOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Sort by');

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setSortOrder(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={handleToggle} className="bg-black text-white px-4 py-2 rounded-lg">
        {selected}
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg">
          <li onClick={() => handleSelect('Price: Low to High')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
          <li onClick={() => handleSelect('Price: High to Low')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
