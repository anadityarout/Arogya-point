// App.jsx or MainLayout.jsx
import React, { useState } from 'react';
import Filter from './Filter';
import Price from './Price';
import Rating from './Rating';
import Discount from './Discount';
import Availability from './Availability';
import Dropdown from './Dropdown';
import Card from './Card';
import img1 from '../assets/coffeePowder.png'
import img2 from '../assets/decoctionBold.png'
import img3 from '../assets/plush.png'
import img4 from '../assets/supreme.png'

const MainLayout = () => {
  const [filters, setFilters] = useState({
    price: { min: 0, max: Infinity },
    rating: [],
    discount: [],
    availability: null,
  });
  const [sortOrder, setSortOrder] = useState(null);

  const clearFilters = () => {
    setFilters({
      price: { min: 0, max: Infinity },
      rating: [],
      discount: [],
      availability: null,
    });
  };

  const products = [
    // Dummy data for products
    {
        id: 1,
      image: img1,
      name: 'Product 1',
      rating: 1,
      reviews: 120,
      originalPrice: '100',
      salePrice: '980',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 2,
      image: img2,
      name: 'Product 1',
      rating: 2,
      reviews: 120,
      originalPrice: '10000',
      salePrice: '8000',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 3,
      image: img3,
      name: 'Product 1',
      rating: 3,
      reviews: 120,
      originalPrice: '100',
      salePrice: '810',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 4,
      image: img1,
      name: 'Product 1',
      rating: 4,
      reviews: 120,
      originalPrice: '1200',
      salePrice: '280',
      details: 'Some details about product 1.',
      inStock: !true,
    },
    {
        id: 5,
      image: img3,
      name: 'Product 1',
      rating: 5,
      reviews: 120,
      originalPrice: '100',
      salePrice: '80',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 6,
      image: img3,
      name: 'Product 1',
      rating: 5,
      reviews: 120,
      originalPrice: '100',
      salePrice: '80',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 7,
      image: img3,
      name: 'Product 1',
      rating: 5,
      reviews: 120,
      originalPrice: '100',
      salePrice: '80',
      details: 'Some details about product 1.',
      inStock: true,
    },
    {
        id: 8,
      image: img3,
      name: 'Product 1',
      rating: 5,
      reviews: 120,
      originalPrice: '100',
      salePrice: '80',
      details: 'Some details about product 1.',
      inStock: true,
    },
    // Add more products as needed
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => product.salePrice >= filters.price.min && product.salePrice <= filters.price.max)
    .filter(product => filters.rating.length === 0 || filters.rating.includes(product.rating))
    .filter(product => filters.discount.length === 0 || filters.discount.some(d => product.originalPrice - product.salePrice >= (d / 100) * product.originalPrice))
    .filter(product => filters.availability === null || (filters.availability ? product.inStock : !product.inStock))
    .sort((a, b) => {
      if (sortOrder === 'Price: Low to High') {
        return a.salePrice - b.salePrice;
      }
      if (sortOrder === 'Price: High to Low') {
        return b.salePrice - a.salePrice;
      }
      return 0;
    });

  return (
    <>

    <div className='grid grid-cols-5 gap-4 bg-white p-4'>

        <div className='bg-white row-span-3'>

        <Filter clearFilters={clearFilters} />
        <Price filters={filters} setFilters={setFilters} />
        <Rating filters={filters} setFilters={setFilters} />
        <Discount filters={filters} setFilters={setFilters} />
        <Availability filters={filters} setFilters={setFilters} />

        </div>

        <div className='bg-white col-span-4 row-span-3'>
            
        <Dropdown setSortOrder={setSortOrder} />
        {filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}

        </div>

    </div>


    </>
  );
};

export default MainLayout;
