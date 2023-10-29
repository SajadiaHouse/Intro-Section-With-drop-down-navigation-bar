import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='md:mx-[100px]'>
      <div className='flex md:flex-row md:h-16 md:w-full p-4 md:my-4'>
        <img src="./images/logo.svg" className='object-scale-down' alt="" />
          
          <div className='group relative w-24 align-middle text-center blok  hover:font-semibold'><a href="">Features<img src="./images/icon-arrow-down.svg" alt="" className='inline-block ml-1 transition-transform transform group-hover:rotate-180' /></a>
          <div className='bg-slate-100 shadow-2xl p-3 w-[120px] h-auto absolute invisible group-hover:visible z-50'>
              <ul className='text-left text-md'>
                <li className='inline-flex mb-1 align-middle hover:font-bold hover:bg-slate-200'><img src="./images/icon-todo.svg" alt="" className='w-3 h-3 mr-3 self-center ' />Todo List</li>
                <li className='inline-flex mb-1 align-middle hover:font-bold hover:bg-slate-200'><img src="./images/icon-calendar.svg" alt="" className='w-3 h-3  self-center mr-3' />Calendar</li>
                <li className='inline-flex mb-1 align-middle hover:font-bold hover:bg-slate-200'><img src="./images/icon-reminders.svg" alt="" className='w-3 h-3 self-center  mr-3' />Reminder</li>
                <li className='inline-flex mb-1 align-middle hover:font-bold hover:bg-slate-200'><img src="./images/icon-planning.svg" alt="" className='w-3 h-3  self-center mr-3' />Planing</li>
              </ul>
          </div>
          </div>
          <div className='group w-24 align-middle text-center blok  hover:font-semibold'><a href="" >Career<img src="./images/icon-arrow-down.svg" alt="" className='inline-block ml-1 transition-transform transform group-hover:rotate-180' /></a>
              <div className='absolute text-md invisible group-hover:visible bg-slate-100 shadow-2xl w-auto h-auto p-2'>
                <ul className='text-left'>
                  <li><a href="" className='mb-1'>History</a></li>
                  <li><a href="" className='mb-1'>Our Team</a></li>
                  <li><a href="" className='mb-1'>Blog</a></li>
                </ul>
              </div>
          </div>
          <div className='w-24 align-middle text-center blok  hover:font-semibold'><a href="" >Company</a></div>
          <div className='w-24 align-middle text-center blok  hover:font-semibold'><a href="" >About</a></div>
        
        <div className='ml-auto'>
          <a href=""  className='w-24 mr-4 align-middle text-center blok  hover:font-semibold'>Login</a>
          <a href="" className='border p-1.5 rounded-md w-[100px] border-slate-800 align-middle text-center hover:bg-black hover:text-white'>Register</a>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default Navbar