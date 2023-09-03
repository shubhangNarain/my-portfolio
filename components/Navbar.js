import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <Link href="/" className='p-5 flex flex-col'>
        <div className='text-5xl font-bold text-gray-500'>
            Shubhang
        </div>
        <div className='text-5xl font-normal text-gray-500'>
            Narain
        </div>
      </Link>

      <div className='p-5 lg:p-10'>
        <Link class="bg-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400
          hover:text-black text-white-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow lg:text-lg text-sm"
          href="https://drive.google.com/file/d/1C2hlxTJiXzwPv9ch8FiRaTt-LJCuEa2-/view?usp=sharing"
        >
          Download Resume
        </Link>
      </div>
    </div>
  )
}

export default Navbar
