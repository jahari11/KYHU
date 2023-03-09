import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/1518500/pexels-photo-1518500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p className='text-xl font-semibold'>Get Away</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia sunt deserunt quae nesciunt cupiditate molestias quas dolore reiciendis ab facere illum fugiat accusamus at tempora provident est numquam, non minima?</p>
            <button className='bg-white text-black font-semibold'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero