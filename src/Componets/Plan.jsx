import React from 'react'

const Plan = () => {
  return (
    <div className='m-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]' >
            <img className='row-span-3 object-cover w-full h-full p-2 ' src="https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2 ' src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2 ' src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2 ' src="https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid className='object-cover w-full h-full p-2 '=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2 ' src="https://images.unsplash.com/photo-1564613469739-c78f970f9c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="" />
        </div>
        {/*Right Side*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip Now</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sapiente voluptas nostrum? Eum magni laborum voluptatum quos illum explicabo porro, sed ullam, fugiat, facere blanditiis rerum officiis similique eveniet at.</p>
            <p className='pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolore, inventore possimus itaque earum deleniti est libero eaque molestias praesentium maiores aut perspiciatis hic iusto magni quas deserunt commodi sunt.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn more</button>
                <button className=' bg-black border-black mr-4 hover:shadow-xl text-white'>Book your trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan