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
    <div className='w-full h-full bg-gradient-to-r from-slate-900 to-slate-800'>
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
                  <span className=''>Hi!</span>
                  <span className=''>I'm Shubhang</span>
                </div>
              </div>
            
          </div>

          <div className='grid grid-rows-[60%,40%] '>
              
            <div className='grid grid-cols-2'>
              <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gradient-to-tl from-blue-500 via-fuchsia-600 to-orange-600
              '>
                Testimonials
              </div>

              <div className='mx-5 my-12 flex items-center justify-center rounded-2xl
                bg-gradient-to-tl from-blue-500 via-fuchsia-600 to-orange-600'>
                Testimonial Right
              </div>
            </div>

            <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gradient-to-tl from-blue-500 via-fuchsia-600 to-orange-600'>
              Two
            </div>

          </div>


        </div>
        
        <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gradient-to-tl from-blue-500 via-fuchsia-600 to-orange-600'>
          
        </div>
      </div>
    </div>
  )
}
