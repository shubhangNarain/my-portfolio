import React from 'react'
import Link from 'next/link'

import { FiGithub } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'

const Connect = () => {
  return (
    <div className='p-10 m-5 rounded-2xl grid grid-flow-col lg:grid-flow-row sm:justify-between lg:justify-center items-center
         bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
        bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>

        <Link href="https://github.com/shubhangNarain">
          <FiGithub className='hover:scale-[125%] ease-in-out duration-300' size={40}/>
        </Link>

        <Link href="https://www.instagram.com/_.snv.__/">
          <BsInstagram className='hover:scale-[125%] ease-in-out duration-300' size={40}/>
        </Link>
        
        <Link href="https://dev.to/shubhangnarain">
          <FaDev className='hover:scale-[125%] ease-in-out duration-300' size={40}/>
        </Link>

        <Link href="https://www.facebook.com/profile.php?id=100008802099909">
          <GrFacebook className='hover:scale-[125%] ease-in-out duration-300' size={40}/>
        </Link>       
        
    </div>
  )
}

export default Connect