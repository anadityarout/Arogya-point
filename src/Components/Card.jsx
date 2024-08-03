// Card.jsx
import React from 'react';

const Card = ({ product }) => {
  return (
<>



    <div className='bg-slate-200 gap-2 grid lg:grid-cols-4 sm:grid-cols-2 rounded-md'>
        <div key={product.id} className='bg-white h-auto rounded-md p-1'>
            <button className='bg-blue-600 rounded-md w-10 text-xs text-white ml-2 '>
                Sale!
            </button>
            {/* image section */}
            <div className='flex justify-center items-center mb-3'>
                <img src={product.image} alt="..." className='h-28'/>
            </div>

            {/* rating section */}
            <div className='mb-2'>

            </div>

        </div>

    </div>





    <div className="p-4 border rounded-lg shadow-md bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
        <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{product.details}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 line-through">${product.originalPrice}</span>
        <span className="text-blue-500 font-semibold">${product.salePrice}</span>
      </div>
      <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-lg ${product.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>

    </>
  );
};

export default Card;
