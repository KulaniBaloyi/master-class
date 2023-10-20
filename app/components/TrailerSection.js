import Image from 'next/image'
import React from 'react'

const TrailerSection = () => {
  return (
    <div className='w-full h-[500px] relative backG'>
        <Image src={"/woman.jpg"} fill alt="trailerImage" className='object-cover' />
    </div>
  )
}

export default TrailerSection