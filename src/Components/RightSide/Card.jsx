import React from 'react'
import img1 from './coffeePowder.png'
import img2 from './decoctionBold.png'
import img3 from './plush.png'
import img4 from './supreme.png'
import { FaStar } from "react-icons/fa";


const Card = () => {
  return (
    <>
      <div className='bg-slate-200 gap-2 grid lg:grid-cols-4 sm:grid-cols-2 rounded-md'>

        {/* card 1 */}
        <div className='bg-white h-auto rounded-md p-1'>
          <button className='bg-blue-600 rounded-md w-10 text-xs text-white ml-2'>Sale!</button>
          {/* image section */}
          <div className='flex justify-center items-center mb-3'>
            <img src={img1} alt="" className='h-28' />
          </div>
          {/* rating */}
          <div className='mb-2 pl-2'>
            <p className='underline mb-2 text-zinc-700'>Phalada Pure & Sure | Organic Coconut Milk-160ml</p>
            <div className='flex items-center-center'>
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <p className='ml-1 text-neutral-700'>(286 Reviews)</p>
            </div>
            <div className='flex mt-2'>
              <p className='text-neutral-700'>From: </p>
              <p className='text-zinc-700'>₹1,179</p>
              <p className='line-through text-neutral-400 ml-2'>₹1,749</p>
            </div>
          </div>
          {/* details */}
          <div className='mb-3 mt-2 pl-2'>
            <p className='text-zinc-700'>EXTRA VIRGIN OLIVE OILS</p>
          </div>
          {/* button */}
          <div className='flex justify-center items-center'>
            <button className='border border-green-600 rounded-lg w-44 text-zinc-700 my-3'>Quick View</button>
          </div>
        </div>


        {/* card 2 */}
        {/* card 1 */}
        <div className='bg-white h-auto rounded-md p-1'>
          <button className='bg-blue-600 rounded-md w-10 text-xs text-white ml-2'>Sale!</button>
          {/* image section */}
          <div className='flex justify-center items-center mb-3'>
            <img src={img1} alt="" className='h-28' />
          </div>
          {/* rating */}
          <div className='mb-2 pl-2'>
            <p className='underline mb-2 text-zinc-700'>Phalada Pure & Sure | Organic Coconut Milk-160ml</p>
            <div className='flex items-center-center'>
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <p className='ml-1 text-neutral-700'>(286 Reviews)</p>
            </div>
            <div className='flex mt-2'>
              <p className='text-neutral-700'>From: </p>
              <p className='text-zinc-700'>₹1,179</p>
              <p className='line-through text-neutral-400 ml-2'>₹1,749</p>
            </div>
          </div>
          {/* details */}
          <div className='mb-3 mt-2 pl-2'>
            <p className='text-zinc-700'>EXTRA VIRGIN OLIVE OILS</p>
          </div>
          {/* button */}
          <div className='flex justify-center items-center'>
            <button className='border border-green-600 rounded-lg w-44 text-zinc-700 my-3'>Quick View</button>
          </div>
        </div>


        {/* card 3 */}
        <div className='bg-white h-auto rounded-md p-1'>
          <button className='bg-blue-600 rounded-md w-10 text-xs text-white ml-2'>Sale!</button>
          {/* image section */}
          <div className='flex justify-center items-center mb-3'>
            <img src={img1} alt="" className='h-28' />
          </div>
          {/* rating */}
          <div className='mb-2 pl-2'>
            <p className='underline mb-2 text-zinc-700'>Phalada Pure & Sure | Organic Coconut Milk-160ml</p>
            <div className='flex items-center-center'>
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <p className='ml-1 text-neutral-700'>(286 Reviews)</p>
            </div>
            <div className='flex mt-2'>
              <p className='text-neutral-700'>From: </p>
              <p className='text-zinc-700'>₹1,179</p>
              <p className='line-through text-neutral-400 ml-2'>₹1,749</p>
            </div>
          </div>
          {/* details */}
          <div className='mb-3 mt-2 pl-2'>
            <p className='text-zinc-700'>EXTRA VIRGIN OLIVE OILS</p>
          </div>
          {/* button */}
          <div className='flex justify-center items-center'>
            <button className='border border-green-600 rounded-lg w-44 text-zinc-700 my-3'>Quick View</button>
          </div>
        </div>


        {/* card 4 */}
        <div className='bg-white h-auto rounded-md p-1'>
          <button className='bg-blue-600 rounded-md w-10 text-xs text-white ml-2'>Sale!</button>
          {/* image section */}
          <div className='flex justify-center items-center mb-3'>
            <img src={img1} alt="" className='h-28' />
          </div>
          {/* rating */}
          <div className='mb-2 pl-2'>
            <p className='underline mb-2 text-zinc-700'>Phalada Pure & Sure | Organic Coconut Milk-160ml</p>
            <div className='flex items-center-center'>
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <FaStar className='text-orange-400 mt-1' />
              <p className='ml-1 text-neutral-700'>(286 Reviews)</p>
            </div>
            <div className='flex mt-2'>
              <p className='text-neutral-700'>From: </p>
              <p className='text-zinc-700'>₹1,179</p>
              <p className='line-through text-neutral-400 ml-2'>₹1,749</p>
            </div>
          </div>
          {/* details */}
          <div className='mb-3 mt-2 pl-2'>
            <p className='text-zinc-700'>EXTRA VIRGIN OLIVE OILS</p>
          </div>
          {/* button */}
          <div className='flex justify-center items-center'>
            <button className='border border-green-600 rounded-lg w-44 text-zinc-700 my-3'>Quick View</button>
          </div>
        </div>


      </div>


    </>

  )
}

export default Card