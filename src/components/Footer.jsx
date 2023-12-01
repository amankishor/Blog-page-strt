import React from 'react'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-5 gap-6 lg:col-span-4 md:grid-col-4'>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'> category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Geopolitics</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Wars</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Games</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Games</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Crictek</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>FOtaball</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Asian GAmes</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Olympics</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Industrilization</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Semicoductor</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Tesla</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Indian parliament</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'></a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Broucher</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Education</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transtion-colors duration-300 hover:text-orange-500'>Non-Profit</a>
                            </li>
                        </ul>
                    </div>  
            
                </div>
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wie text-gray-300'>Subscribe for updates</p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name="email" id="email" className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm 
                            aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                            <button type='submit' className='inline-flex items-center 
                            justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>
                        This blog website offers numerous benefits to its users. It provides valuable information, 
                        diverse perspectives, and a platform for sharing ideas. Readers can gain insights on various
                         topics, while authors can reach a wide audience and engage with a community of like-minded individuals.
                        </p>

                </div>

            </div>

            <div>
                <p className='text-gray-500'> All rights reserved 2032</p>
                <div>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter className='h-6 w-6'/></a>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
