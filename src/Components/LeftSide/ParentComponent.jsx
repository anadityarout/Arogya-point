// import React, { useState, useEffect } from 'react';
// import PriceRange from './PriceRange';
// import Filter from './Filter';
// import Card from '../RightSide/Card';
// import productsData from './productsData'; // Assume you have a file with product data

// const ParentComponent = () => {
//   const [priceRange, setPriceRange] = useState([1, 5000]);
//   const [filteredProducts, setFilteredProducts] = useState(productsData);

//   useEffect(() => {
//     filterProducts();
//   }, [priceRange]);

//   const handleSliderChange = (value) => {
//     setPriceRange(value);
//   };

//   const filterProducts = () => {
//     const filtered = productsData.filter(
//       (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
//     );
//     setFilteredProducts(filtered);
//   };

//   const clearFilter = () => {
//     setPriceRange([1, 5000]);
//   };

//   return (
//     <div>
//       <Filter clearFilter={clearFilter} />
//       <PriceRange priceRange={priceRange} onSliderChange={handleSliderChange} />
//       <Card products={filteredProducts} />
//     </div>
//   );
// };

// export default ParentComponent;
