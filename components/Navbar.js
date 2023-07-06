import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='p-5 flex flex-col'>
        <div className='text-5xl font-bold text-gray-500'>
            Shubhang
        </div>
        <div className='text-5xl font-normal text-gray-500'>
            Narain
        </div>
      </div>

    <div className='p-10 flex flex-col'>
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
    </div>
    </div>
  )
}

export default Navbar
