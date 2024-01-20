import { useState } from 'react'
import { data } from '../data/data.js'


export default function Food() {
    const [itemdata,setitemdata]=useState(data)

    function filterfood(category){
        setitemdata(data.filter((item)=>{
            return item.category==category
    }))

    function searchfilter(price){
        setitemdata(
            data.filter((item)=>{
                    return  item.price===price
            })
        )

    }


    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-400 font-bold text-center text-4xl'>Top Rated Menu items</h1>
            {/* Filter row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter type */}
                <div>
                    <p className='text-gray-500 font-bold'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>setitemdata(data)} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>All</button>
                        <button onClick={()=>filterfood('burger')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Burgers</button>
                        <button onClick={()=>filterfood('pizza')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Pizza</button>
                        <button onClick={()=>filterfood('salad')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Salads</button>
                        <button onClick={()=>filterfood('chicken')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>Chicken</button>
                    </div>
                </div>
            </div>

            {/* Filter price */}
            <div >
                <p className='font-bold text-gray-600'>Price Filter</p>
                <div className='flex justify-between w-full max-w-[390px]'>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$</button>
                    <button className='m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'>$$$$</button>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
                {data.map((items,index)=>(
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-200'>
                            <img src={items.image} alt={items.name}
                            className='w-full h-[200px] object-cover rounded-t-lg '
                            />
                            <div className='flex px-2 py-4 justify-between'>
                                <p className='font-bold'>{items.name}</p>
                                <p><span className='bg-orange-500 text-white p-1 rounded-full'>{items.price}</span></p>
                            </div>
                        </div>
                ))}

            </div>
        </div>
    )
}
