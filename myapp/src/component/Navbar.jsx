import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row h-16 w-full p-4 my-4'>
        <img src="./images/logo.svg" className='object-scale-down' alt="" />
        
          <div className='w-24 align-middle text-center blok'><a href="" >Features</a></div>
          <div className='w-24 align-middle text-center blok'><a href="" >Career</a></div>
          <div className='w-24 align-middle text-center blok'><a href="" >Company</a></div>
          <div className='w-24 align-middle text-center blok'><a href="" >About</a></div>
        
        <div className='ml-auto'>
          <a href=""  className='w-24 mr-10 align-middle text-center blok'>Login</a>
          <a href="" className='border p-1.5 rounded-md w-[100px] border-slate-800 align-middle text-center'>Register</a>
        </div>
      </div>
    </>
  )
}

export default Navbar