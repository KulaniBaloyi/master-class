import Image from 'next/image'
import React from 'react'

const LevelUpTeamSection = () => {
  return (
    <div className='w-[95%] m-auto rounded-xl h-[350px] my-10 grid grid-cols-2 bg-[#222326] text-white'>
        <div className=' w-full h-full flex relative' >
            <div className='rounded-lg  aspect-square absolute -top-[10%] right-0 h-[120%] overflow-hidden'>
                <div className='h-full w-full relative'>
                    <Image fill alt={"person-working"} className='object-cover' src="/pexels-fauxels-3184355.jpg"/>
                </div>
            </div>
        </div>
        <div className=' w-full h-full p-10 flex flex-col gap-5 justify-center'>
            <h2>Master at Work</h2>
            <h3 className='uppercase text-3xl font-semibold leading-8'>Level up your team</h3>
            <div className='flex gap-5'>
                <button className='px-4 py-2 rounded-md bg-[#c71a42] font-semibold'>Contact Sales</button>
                <button className='px-4 py-2 flex items-center gap-2'>
                    <p>Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
</svg>

        
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default LevelUpTeamSection