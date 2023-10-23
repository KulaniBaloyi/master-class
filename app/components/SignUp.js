import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 p-20'>
        <h2 className='font-semibold leading-8 text-5xl'>Start your journey today.</h2>
        <p>Choose from 3 plans. Starting at <span className='font-semibold'>R200/month</span>, billed annually.</p>
        <div className='flex gap-5'>
            <button className='rounded-md border px-4 py-2 text-lg leading-8 bg-[#c71a42] font-semibold text-white'>Sign Up</button>
            <button className='rounded-md border px-4 py-2 text-lg leading-8'>Explore Classes</button>
        </div>
    </div>
  )
}

export default SignUp