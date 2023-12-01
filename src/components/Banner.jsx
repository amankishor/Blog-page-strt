import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className=' px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-sung font-bold'>Welcome to our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5  font-primary'>Join the AK and inhanche your knwoledge</p>
            <div>
                <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>learn more
                <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>      
    </div>
  )
}

export default Banner
