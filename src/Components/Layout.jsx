import React from 'react'
import Head from './RightSide/Head'
import SortBy from './RightSide/SortBy'
import Card from './RightSide/Card'
import Filter from './LeftSide/Filter'
import Rating from './LeftSide/Rating'
import Discount from './LeftSide/Discount'
import Availability from './LeftSide/Availability'
import PriceRange from './LeftSide/PriceRange'

const Layout = () => {
  return (
    <>
        <div className='grid grid-cols-5 gap-4 bg-gray-200 p-4'>


            <div className='bg-gray-200 row-span-3'>
              <Filter/>
              <PriceRange/>
              <Rating/>
              <Discount/>
              <Availability/>
            </div>

            
            <div className='bg-gray-200 col-span-4 row-span-3 p-4'>
                <Head/> <br/>
                <SortBy/> <br/>
                <Card/> <br/>
                <Card/> <br/>

            </div>
        </div>
      


    </>
  )
}

export default Layout
