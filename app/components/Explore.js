"use client"

const Explore = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
     
  return (
    <div className='my-10 flex flex-col'>
        <h2 className='font-semibold text-center text-5xl lg:w-3/5 mx-auto  my-5'>A dose of inspiration,
whenever you need it.</h2>
<ul className='flex gap-5 place-content-center flex-wrap w-[90%] m-auto text-xs lg:text-base'>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border border-[#eed37f]'>Trending</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Design & Style</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Arts and Entertainment</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Music</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Business</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Sports and Gaming</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Writing Science and Tech</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Home & Lifestyle</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Community & Government</li>
    <li className='px-2 py-1 lg:px-4 lg:py-2 font-semibold rounded-md  tracking-[.01em] leading-8 border '>Wellness</li>
    
</ul>
<section className='my-5 w-[95%] mx-auto flex flex-col'>
    <div className='flex justify-between'>
    <h2 className='text-lg leading-8 font-semibold'>Popular Now <span className='text-gray-500'>See All</span></h2>
   
<div className='flex gap-2'>
    <button onClick={slideLeft} className='text-white bg-[#9ea0a9] aspect-square rounded-full p-1 grid place-content-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
</svg>
    </button>
    <button onClick={slideRight} className='text-white bg-[#9ea0a9] aspect-square rounded-full p-1 grid place-content-center'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
</svg>
    </button>



</div>

    </div>
   
    <div id='slider' className='w-full h-[500px] flex gap-5 overflow-x-scroll scroll-smooth scrollbar-hide py-5 snap-x'>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        <div className='w-[256px] h-full aspect[9/16] border rounded-lg shrink-0 snap-center'></div>
        
    </div>
    <button className='px-4 py-2  font-semibold rounded-md  tracking-[.01em] leading-8 text-lg border self-center '>Explore Classes</button>

</section>
    </div>
  )
}

export default Explore