import React from 'react'
import teamPic1 from '@/public/team-pics/team-pic1.jpg'
import teamPic2 from '@/public/team-pics/team-pic2.png'

import Image from 'next/image'

const TeamPic = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      <div className='w-full lg:w-1/2 aspect-video'>
        <Image src={teamPic1} alt='TEAM Photo' width={1080} height={720} className='w-full h-full object-center object-cover rounded-xl'  sizes="(max-width: 768px) 100vw, 1080px"
        ></Image>
      </div>

      <div className='w-full lg:w-1/2 aspect-video'>
      <Image src={teamPic2} alt='TEAM Photo' width={1080} height={720} className='w-full h-full object-center object-cover rounded-xl'  sizes="(max-width: 768px) 100vw, 1080px"
      ></Image>
    </div>
    </div>
  )
}

export default TeamPic