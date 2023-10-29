
import React from 'react';

const Main = () => {
  return (
    <>
      <div className='mx-32 grid gap-16 grid-cols-2 w-auto'>
        <div className='p-10'>
          <h1 className='text-6xl font-bold'>Make remote work</h1>
          <p className='text-md mt-10'>Get your team in sync. no matter your location. Streamlining processes, create team rituals, and watch productivity soar.</p>
          <button className='p-2 border bg-black text-white hover:text-black hover:border-black hover:bg-white rounded-xl w-[120px] my-8'>Learn more</button>
          <div className='grid gap-3 grid-cols-4 mt-6'>
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
        <div >
          <img src="./images/image-hero-desktop.png" className='h-[90vh] ml-auto' alt=""   />
        </div>
      </div>
    </>
  );
}

export default Main;