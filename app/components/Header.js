import React from 'react'

const Header = () => {
  return (
  <header className='p-3 z-50 flex justify-between items-center border-b shadow-sm shadow-gray-100'>
    <div className='flex gap-5 items-center'>
      <h1 className='font-semibold'>Master Class</h1>
      <div className='rounded-md px-4 py-2 border'>Browse</div>
      <div className='rounded-md  border flex items-center h-10 w-80 px-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
<input type={"text"} placeholder='What would you like to learn today?' className='outline-none text-[16px] leading-4 w-full h-full pl-2'/>

      </div>
    </div>
    <ul className='flex gap-5 items-center' >
      <li>At Work</li>
      <li>View Plans</li>
      <li>Log In</li>
      <button  className='px-4 py-2 rounded-md bg-[#c71a42] font-semibold text-white'>Sign Up</button>
    </ul>
  </header>
  )
}

export default Header