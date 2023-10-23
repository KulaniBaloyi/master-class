import React from 'react'

const Header = () => {
  return (
  <header className='p-3 z-50 flex justify-between'>
    <div className='flex'>
      <h1>Master Class</h1>
      <div>Browse</div>
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