"use client"

const ComingSoon = () => {
    const slideLeft = () => {
        var slider = document.getElementById('videoSlider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('videoSlider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
  return (
    <div className='ml-[2.5%]'>
        <h2 className='text-3xl font-semibold leading-8'>Coming Soon</h2>
        <section className=' flex flex-col relative'>

    <div id="videoSlider" className='w-full h-[500px] flex gap-5 overflow-x-scroll scrollbar-hide pr-5 items-center '>
        <div className='h-[300px] max-w-full aspect-video border rounded-xl shrink-0 snap-center'></div>
        <div className='h-[300px] max-w-full aspect-video border rounded-xl shrink-0 snap-center'></div>
        <div className='h-[300px] max-w-full aspect-video border rounded-xl shrink-0 snap-center'></div>
        
        <button onClick={slideLeft} className='absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-[#9ea0a9] place-content-center p-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
</svg>


        </button>
        <button onClick={slideRight} className='absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-[#9ea0a9] grid place-content-center p-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
</svg>

        </button>
        
        
    </div>
   

</section>
</div>
  )
}

export default ComingSoon