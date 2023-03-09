import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', title: 'GrilledMeat'
        },
        {
            url:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80', title: 'Pizza'
        },
        {
            url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title:'Veggie'
        },
        {
            url:'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',title:'Burger'
        },
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0) 
    const prevSlide = () => {
        const isFirstSLide = currentIndex ===0
        const newIndex = isFirstSLide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1 
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        {/*Left Arrow*/}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20
        text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlide} size={20}/>
        </div>
        {/*Right Arrow*/}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20
        text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={20}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide,slideIndex)=>(
                <div className='text-2xl cursor-pointer' 
                key={slideIndex} 
                onClick={()=> goToSlide(slideIndex)}
                >
                    <RxDotFilled/>
                </div>
                
            ))}
        </div>
    </div>
  );
};

export default ImageSlider