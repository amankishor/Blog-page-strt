import React from 'react'
import Blogpage from '../components/Blogpage'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white '>
          <h2 className='text-5xl lg:text-7xl leading-sung font-bold'> our Blog</h2>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Blogpage/>

      </div>
    </div>
  )
}

export default Blogs
