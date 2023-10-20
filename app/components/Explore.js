import React from 'react'

const Explore = () => {
  return (
    <div className='my-10 flex flex-col'>
        <h2 className='font-semibold text-center text-5xl lg:w-3/5 mx-auto  my-5'>A dose of inspiration,
whenever you need it.</h2>
<ul className='flex gap-5 place-content-center flex-wrap w-[90%] m-auto'>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border border-[#eed37f]'>Trending</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Design & Style</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Arts and Entertainment</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Music</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Business</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Sports and Gaming</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Writing Science and Tech</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Home & Lifestyle</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Community & Government</li>
    <li className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border '>Wellness</li>
    
</ul>
<section className='my-5 w-[95%] mx-auto flex flex-col'>
    <h2 className='text-lg leading-8 font-semibold'>Popular Now <span className='text-gray-500'>See All</span></h2>
    <div className='w-full h-[500px] flex gap-5 overflow-x-auto py-5 '>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0'></div>
        
    </div>
    <button className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border self-center '>Explore Classes</button>

</section>
    </div>
  )
}

export default Explore