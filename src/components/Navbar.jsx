import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const[isMenuOpen,setISMenuOpen] =useState(false);
    const[isMOdelopen ,setIsModelOpen] =useState(false);
    
    const toggleMenu =() =>{
        setISMenuOpen(!isMenuOpen);

    }
    const navItems =[
        {path:"/", link:"Home"},
        {path:"/services", link:"Services"},
        {path:"/about", link:"About"},
        {path:"/contact", link:"Contact"},
        {path:"/blogs", link:"Blogs"}
    ]
    const openMOdel =()=>{
        setIsModelOpen(true);
    }
    const closeModel =() => {
        setIsModelOpen(false);
    }
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl max-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>A</span><span className='text-green-800'>k</span></a>

            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path,link})=> <li className='text-white' key={path}>
                        <NavLink className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                        to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-blue-800'><FaFacebook/></a>
                <a href="/" className='hover:text-red-600'><FaDribbble/></a>
                <a href="/" className='hover:text-blue-800'><FaTwitter/></a>
                <button onClick={openMOdel} className='bg-blue-900 px-6 py-2 font-medium rounded hover:bg-white
                 hover:text-orange-500 transition-all duration-200 ease-in'>Login</button>
            </div>
{/* modal  component is here*/}
            <Modal isOpen={isMOdelopen} onClose ={closeModel}/>

            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                    }
                </button>
            </div>
        </nav>
{/* menu for mobile */}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ?"fixed top-0 left-0 w-full transition-all ease-out" : "hidden"}`}>
                {
                    navItems.map(({path,link})=> <li className='text-black' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar
