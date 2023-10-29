
import React from 'react';

const Main = () => {
  return (
    <>
      <div className='md:mx-[200px] flex md:gap-[150px] md:flex-row flex-col-reverse w-auto'>
        <div className='md:text-left text-center p-6 md:p-[30px] md:mt-8 mt-4'>
          <h1 className='md:text-6xl text-4xl font-bold'>Make remote work</h1>
          <p className='text-md mt-10'>Get your team in sync. no matter your location. Streamlining processes, create team rituals, and watch productivity soar.</p>
          <button className='p-2 border bg-black text-white hover:text-black hover:border-black hover:bg-white rounded-xl w-[120px] my-10'>Learn more</button>
          <div className='grid gap-3 grid-cols-4 mt-6 md:mt-12'>
            <div>
              <img src="./images/client-databiz.svg" alt="" className='object-scale-down' />
            </div>
            <div>
              <img src="./images/client-audiophile.svg" alt="" className='object-scale-down' />
            </div>
            <div>
              <img src="./images/client-meet.svg" alt="" className='object-scale-down' />
            </div>
            <div>
              <img src="./images/client-maker.svg" alt="" className='object-scale-down' />
            </div>
          </div>
        </div>
        
          <img src="./images/image-hero-desktop.png" alt="" className='flex-1 md:h-[500px] md:ml-auto md:w-auto' />
        
      </div>
    </>
  );
}

export default Main;