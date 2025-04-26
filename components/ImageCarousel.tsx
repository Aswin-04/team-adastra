'use client'

import React, {useState, useEffect} from 'react'
import { roverImgs } from '@/constants'
import Image from 'next/image'
import { RxDotFilled } from "react-icons/rx";
const ImageCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev == roverImgs.length-1 ? 0 : prev+1)
    }, 2500);

    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className='relative w-full min-w-fit max-w-[480px] h-[200px] xs:h-[300px]'>
      <div className='w-full h-full'>
        <Image src={roverImgs[`${currentIndex}`].src} alt='rover-image' width={1080} height={720} priority  className='border-4 border-brand-600 rounded-2xl w-full h-full object-center object-cover'></Image>
      </div>

      <div className='text-xl flex mt-4 justify-center items-center'>
        {roverImgs.map((img, index) => (
          <div key={index} className={`${index == currentIndex ? ' text-brand' : ' text-white'}`}>
            <RxDotFilled></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel