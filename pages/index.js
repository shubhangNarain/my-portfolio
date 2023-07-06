import Image from 'next/image'
import { Inter } from 'next/font/google'

import { FiGithub } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'

import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-slate-900 to-slate-800'>
      <Navbar/>
      <div className='grid h-screen grid-cols-[60%,40%]'>
        
        <div className='grid grid-rows-2 '>
          {/* For left side info */}
          <div className='grid grid-cols-[20%,80%] '>
            
              <div className='p-10 m-5 rounded-2xl grid grid-flow-row justify-center items-center
                bg-gradient-to-tl from-blue-500 via-fuchsia-600 to-orange-600'>
                <FiGithub size={30}/>
                <BsInstagram size={30}/>
                <FaDev size={30}/>
                <GrFacebook size={30}/>
              </div>
              
              <div className='p-10 m-5 rounded-2xl flex items-end
                bg-gradient-to-tl from-gray-300 via-fuchsia-600 to-orange-600'>
                <div className='text-7xl font-bold flex flex-col'>
                  <span className='bg-gradient-to-r from-cyan-00 via-red-400 to-red-300 text-transparent bg-clip-text'>Hi!</span>
                  <span className='bg-gradient-to-r from-cyan-00 via-red-400 to-red-300 text-transparent bg-clip-text'>I'm Shubhang</span>
                </div>
              </div>
            
          </div>

          <div className='grid grid-rows-[60%,40%] bg-blue-500'>
              
            <div>
              One
            </div>

            <div>
              Two
            </div>
          </div>
        </div>
        
        <div>Right</div>
      </div>
    </div>
  )
}
