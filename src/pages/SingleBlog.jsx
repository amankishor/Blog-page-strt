import React from 'react'
import { FaUser ,FaClock} from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

const SingleBlog = () => {
    const data = useLoaderData();
    const{title,image,author,category,published_date,reading_time,content} = data[0];

  return (
    <div>
        <div className='py-40 bg-black text-center text-white '>
          <h2 className='text-5xl lg:text-7xl leading-sung font-bold'>Single blog page</h2>
        </div>

        {/* blogdetail */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded'/>
                </div>
                <h2 className='text-3xl mt-8 fint-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items center mr-2'/>{author} |{published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items center mr-2'/>
                {reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-bas text-gray-500'>
                    <p>The error message usually provides more details about the specific syntax error and the location
                        in your code where the error occurred. However, from what you've shared, it looks like there might
                        be an issue with the module path or the module itself.
                    </p>
                    <p>
                    The error message usually provides more details about the specific syntax error and the location
                        in your code where the error occurred. However, from what you've shared, it looks like there might
                        be an issue with the module path or the module itself.
                    </p> <br />
                    {/* likewise we can add the para or if we have the api then using method we can fetch */}
                </div>

            </div>
            <div className='lg:w-1/2'>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog
