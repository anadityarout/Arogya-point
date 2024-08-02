import React from 'react'
import Dropdown from './Dropdown'

const SortBy = () => {
    return (
        <>
        <div className='grid grid-cols-2'>
            <div className=''>
                <p>showing 1-40 of 155 Products</p>
            </div>
            <div className='ml-52'>
                <Dropdown/>
            </div>
        </div>


        </>
    )
}

export default SortBy
