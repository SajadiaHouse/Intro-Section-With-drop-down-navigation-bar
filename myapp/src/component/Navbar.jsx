import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-white boreder-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap md:flex-row p-4 mx-auto'>
      <a href="https://flowbite.com/" class="flex items-center">
        <img src="./images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
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
      </nav>
      
    </>
  )
}

export default Navbar