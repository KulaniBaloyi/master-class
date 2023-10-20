import React from 'react'

const LevelUpTeamSection = () => {
  return (
    <div className='w-[95%] m-auto border rounded-xl h-[350px] my-10 grid grid-cols-2'>
        <div className='border border-teal-800 w-full h-full flex relative' >
            <div className='rounded-lg border-2 border-dotted border-red-500 aspect-square absolute -top-[10%] right-0 h-[120%]'></div>
        </div>
        <div className='border border-yellow-600 w-full h-full p-10 flex flex-col gap-5 justify-center'>
            <h2>Master at Work</h2>
            <h3 className='uppercase text-3xl font-semibold leading-8'>Level up your team</h3>
            <div className='flex gap-5'>
                <button className='px-4 py-2 rounded-md border'>Contact Sales</button>
                <button className='px-4 py-2 rounded-md border'>Learn More</button>
            </div>
        </div>
        
    </div>
  )
}

export default LevelUpTeamSection