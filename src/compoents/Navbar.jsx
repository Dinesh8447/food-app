import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag} from "react-icons/ai";
import { BsFillCartFill,BsFillSaveFill, BsWallet} from "react-icons/bs";
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends,FaWallet} from 'react-icons/fa';
import {MdFavorite,MdHelp} from 'react-icons/md';


export default function Navbar() {
    const[barhandle,setbarhandle]=useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left side */}
            <div className='flex items-center'>
                <div onClick={()=>setbarhandle(!barhandle)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl lg:text-4xl sm:text-3xl'>Best
                    <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full
                p-1 text-[14px]'>
                    <p className='rounded-full bg-black text-white p-2'>Deiviary</p>
                    <p className='p-2'>pickup</p>
                </div>
            </div>


            {/* search input */}
            <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px]
            sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20}/>
                <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='search'/>
            </div>

            {/* cart */}
            <button className='bg-black text-white rounded-full hidden md:flex items-center py-2'>
                <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>

            {/* mobile menu */}
            {/* overlay */}
    {  barhandle ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 '></div>:""}
           {/* side drawer menu   */}
           <div className={barhandle ? 'fixed w-[300px] h-screen top-0 left-0 bg-white z-10 duration-300'
           :"fixed w-[300px] h-screen top-0 left-[-100%] bg-white z-10 duration-200"}>
                    <AiOutlineClose
                    onClick={()=>setbarhandle(!barhandle)}
                     className='absolute top-4 right-4 cursor-pointer' size={30}/>
                    <h2 className='text-2xl p-4'>Best<span className='font-bold'>eats</span></h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='text-xl flex p-4'>
                                <TbTruckDelivery size={30} className='mr-4' />Orders
                            </li>

                            <li className='text-xl flex p-4'>
                                <MdFavorite size={30} className='mr-4' />Favorits
                            </li>

                            <li className='text-xl flex p-4'>
                                <FaWallet size={30} className='mr-4' />Wallet
                            </li>

                            <li className='text-xl flex p-4'>
                                <MdHelp size={30} className='mr-4' />Help
                            </li>

                            <li className='text-xl flex p-4'>
                                <AiFillTag size={30} className='mr-4' />promotions
                            </li>

                            <li className='text-xl flex p-4'>
                                <BsFillSaveFill size={30} className='mr-4' />BestOne
                            </li>

                            <li className='text-xl flex p-4'>
                                <FaUserFriends size={30} className='mr-4' />Invite Frindes
                            </li>
                        </ul>
                    </nav>
           </div>
        </div>

    )
}
