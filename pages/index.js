import Image from 'next/image'
import { Inter } from 'next/font/google'

import { FiGithub } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FaDev } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'

import Navbar from '../components/Navbar'
import News from '../components/News'
import Head from 'next/head'

import { useEffect, useRef, useState } from 'react'
import HALO from "vanta/dist/vanta.halo.min"
import * as THREE from 'three'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE
        })
      )
    }

    return () => {
      if(vantaEffect) vantaEffect.destroy()
    }
  },[vantaEffect])



  return (
    <div className='h-full w-full' ref={vantaRef}>
      <Head>
        <title>Shubhang Narain</title>
        <meta name="description" content="Shubhang's Portfolio" />
        <link rel="icon" href="/meta2.png" />
      </Head>

      <Navbar/>
      <div className='grid lg:h-screen grid-cols-[60%,40%]'>
        
        <div className='grid grid-rows-2 '>
          {/* For left side info */}
          <div className='grid grid-col-1 lg:grid-cols-[20%,80%] '>
            
              <div className='p-10 m-5 rounded-2xl grid grid-flow-col lg:grid-flow-row sm:justify-between lg:justify-center items-center
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
                <FiGithub className='hover:scale-[150%] ease-in-out duration-300' size={50}/>
                <BsInstagram className='hover:scale-[150%] ease-in-out duration-300' size={50}/>
                <FaDev className='hover:scale-[150%] ease-in-out duration-300' size={50}/>
                <GrFacebook className='hover:scale-[150%] ease-in-out duration-300' size={50}/>
              </div>
              
              <div className='p-10 m-5 rounded-2xl flex items-end
                  bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                  bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 '>
                <div className='text-7xl font-bold flex flex-col text-white'>
                  <span className=''>Hi!</span>
                  <span className=''>I'm Shubhang</span>
                </div>
              </div>
            
          </div>

          <div className='grid grid-rows-[60%,40%] '>
              
            <div className='grid grid-cols-2'>
              <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
                Testimonials
              </div>

              <div className='mx-5 my-12 flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
                Testimonial Right
              </div>
            </div>

            <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
              Two
            </div>

          </div>


        </div>
        
        <div className='hidden m-5 lg:flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
          <News/>
        </div>
      </div>
    </div>
  )
}
