import img1 from '../assets/burger.jpg'
import img2 from '../assets/pizza.jpg'
import img3 from '../assets/cake.jpg'
export default function Headercards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order</button>
        </div>
        <img src={img1} alt='food' className='mx-h-[160px] w-full object-cover rounded-xl'/>
      </div>

      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order</button>
        </div>
        <img src={img2} alt='food' className='mx-h-[160px] w-full object-cover rounded-xl'/>
      </div>

      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order</button>
        </div>
        <img src={img3} alt='food' className='mx-h-[160px] w-full object-cover rounded-xl'/>
      </div>
    </div>
  )
}
