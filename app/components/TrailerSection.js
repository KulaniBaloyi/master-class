import Image from 'next/image'
import React from 'react'

const TrailerSection = () => {
  return (
    <>
    <h2 className='font-semibold text-center text-5xl lg:w-3/5 mx-auto  my-5'>Meet the world's best.
New classes added every month.
</h2>
<div className='w-full h-[500px] relative backG'>
        <Image src={"/woman.jpg"} fill alt="trailerImage" className='object-cover' />
    </div>
    
    </>
    
  )
}

export default TrailerSection