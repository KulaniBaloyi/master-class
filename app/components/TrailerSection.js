import Image from 'next/image'
import React from 'react'

const TrailerSection = () => {
  return (
    <>
    <h2 className='font-semibold text-center text-5xl lg:w-3/5 mx-auto  my-5'>Meet the world's best.
New classes added every month.
</h2>
<div className='w-full h-[700px] relative backG'>
        <Image src={"/woman.jpg"} fill alt="trailerImage" className='object-cover' />
        
        <div className='flex flex-col items-center gap-5 absolute top-1/2 right-10 -translate-y-1/2 border p-5'>
            <p className='capitalize bg-white rounded-full text-sm p-1 px-2'>new</p>
            <div>
            <h2 className='text-3xl uppercase font-semibold text-center'>Whitney</h2>
            <h2 className='text-3xl uppercase font-semibold'>Wolfherd</h2>
            </div>
            
            <p className='text-sm font-semibold text-white'>Rewriting the rules for business and life</p>
            <button className='rounded-md px-3 py-2 flex items-center border-2 border-white/60 gap-2 bg-black/60 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
</svg>

                <p className='font-semibold tracking-[0.1em]'>Watch Trailer</p>
            </button>
        </div>
    </div>
    
    </>
    
  )
}

export default TrailerSection