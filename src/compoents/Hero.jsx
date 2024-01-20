import React from 'react'
import foodimg from '../assets/1.png.jpg'

export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[200px] bg-black/40 felx flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>The<span className='text-orange-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500'>Food</span>Delivery</h1>
        </div>
        <img src={foodimg} className='w-full h-[500px] object-cover' alt='burger' />
      </div>
    </div>
  )
}
