import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../components/Navbar'
import Contact from '@/components/Contact'
import Connect from '../components/Connect'

import { BiCodeAlt } from 'react-icons/bi'

import Head from 'next/head'

import { useEffect, useRef, useState } from 'react'
import HALO from "vanta/dist/vanta.halo.min"
import * as THREE from 'three'
import Link from 'next/link'

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
            
              <Connect/>
              
              <div className='p-10 m-5 rounded-2xl flex items-end
                  bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                  bg-opacity-20 hover:scale-[105%] ease-in-out duration-300'>
                <div className='text-7xl font-bold flex flex-col text-white'>
                  <span className=''>Hi!</span>
                  <span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-violet-200 to-pink-200'>I'm Shubhang</span>
                </div>
              </div>
            
          </div>

          <div className='grid grid-rows-[60%,40%] '>
              
            <div className='grid grid-cols-2'>
              <div className='m-5 flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
                Somthing
              </div>

              <div className='mx-5 my-12 flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
                Testimonial Right
              </div>
            </div>

            <Link href="/Projects" className='m-5 p-10 flex items-center justify-between rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
              
              {/* <div className='text-7xl font-bold font-lora'>Projects</div> */}
              
              <svg className='max-w-[300px]' viewBox="0 0 910 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70.083 121.646H24.7949V93.0811H70.083C77.0817 93.0811 82.7783 91.9417 87.1729 89.6631C91.5674 87.3031 94.7819 84.0479 96.8164 79.8975C98.8509 75.7471 99.8682 71.0677 99.8682 65.8594C99.8682 60.5697 98.8509 55.6462 96.8164 51.0889C94.7819 46.5316 91.5674 42.8695 87.1729 40.1025C82.7783 37.3356 77.0817 35.9521 70.083 35.9521H37.4902V185H0.869141V7.26562H70.083C83.999 7.26562 95.9212 9.78841 105.85 14.834C115.859 19.7982 123.509 26.6748 128.799 35.4639C134.089 44.2529 136.733 54.3034 136.733 65.6152C136.733 77.0898 134.089 87.0182 128.799 95.4004C123.509 103.783 115.859 110.252 105.85 114.81C95.9212 119.367 83.999 121.646 70.083 121.646ZM194.961 81.7285V185H159.805V52.9199H192.886L194.961 81.7285ZM234.756 52.0654L234.146 84.6582C232.437 84.4141 230.361 84.2106 227.92 84.0479C225.56 83.8037 223.403 83.6816 221.45 83.6816C216.486 83.6816 212.173 84.3327 208.511 85.6348C204.93 86.8555 201.919 88.6865 199.478 91.1279C197.118 93.5693 195.327 96.5397 194.106 100.039C192.967 103.538 192.316 107.526 192.153 112.002L185.073 109.805C185.073 101.26 185.928 93.4066 187.637 86.2451C189.346 79.0023 191.828 72.6953 195.083 67.3242C198.42 61.9531 202.489 57.8027 207.29 54.873C212.091 51.9434 217.585 50.4785 223.77 50.4785C225.723 50.4785 227.716 50.6413 229.751 50.9668C231.785 51.2109 233.454 51.5771 234.756 52.0654ZM242.08 120.303V117.739C242.08 108.055 243.464 99.1439 246.23 91.0059C248.997 82.7865 253.026 75.6657 258.315 69.6436C263.605 63.6214 270.116 58.9421 277.847 55.6055C285.578 52.1875 294.448 50.4785 304.458 50.4785C314.468 50.4785 323.379 52.1875 331.191 55.6055C339.004 58.9421 345.555 63.6214 350.845 69.6436C356.216 75.6657 360.285 82.7865 363.052 91.0059C365.819 99.1439 367.202 108.055 367.202 117.739V120.303C367.202 129.906 365.819 138.817 363.052 147.036C360.285 155.174 356.216 162.295 350.845 168.398C345.555 174.421 339.045 179.1 331.313 182.437C323.582 185.773 314.712 187.441 304.702 187.441C294.692 187.441 285.781 185.773 277.969 182.437C270.238 179.1 263.687 174.421 258.315 168.398C253.026 162.295 248.997 155.174 246.23 147.036C243.464 138.817 242.08 129.906 242.08 120.303ZM277.236 117.739V120.303C277.236 125.837 277.725 131.004 278.701 135.806C279.678 140.607 281.224 144.839 283.34 148.501C285.537 152.082 288.385 154.889 291.885 156.924C295.384 158.958 299.657 159.976 304.702 159.976C309.585 159.976 313.776 158.958 317.275 156.924C320.775 154.889 323.582 152.082 325.698 148.501C327.814 144.839 329.36 140.607 330.337 135.806C331.395 131.004 331.924 125.837 331.924 120.303V117.739C331.924 112.368 331.395 107.323 330.337 102.603C329.36 97.8011 327.773 93.5693 325.576 89.9072C323.46 86.1637 320.653 83.234 317.153 81.1182C313.654 79.0023 309.422 77.9443 304.458 77.9443C299.494 77.9443 295.262 79.0023 291.763 81.1182C288.345 83.234 285.537 86.1637 283.34 89.9072C281.224 93.5693 279.678 97.8011 278.701 102.603C277.725 107.323 277.236 112.368 277.236 117.739ZM390.762 52.9199H426.04V192.935C426.04 202.7 424.25 210.96 420.669 217.715C417.088 224.469 411.921 229.596 405.166 233.096C398.411 236.595 390.233 238.345 380.63 238.345C377.619 238.345 374.689 238.182 371.841 237.856C368.911 237.531 365.9 237.002 362.808 236.27L362.93 209.292C364.883 209.618 366.795 209.862 368.667 210.024C370.457 210.269 372.288 210.391 374.16 210.391C377.822 210.391 380.874 209.78 383.315 208.56C385.757 207.339 387.588 205.426 388.809 202.822C390.111 200.299 390.762 197.004 390.762 192.935V52.9199ZM387.954 18.4961C387.954 13.3691 389.744 9.13737 393.325 5.80078C396.987 2.46419 401.789 0.795898 407.729 0.795898C413.752 0.795898 418.553 2.46419 422.134 5.80078C425.715 9.13737 427.505 13.3691 427.505 18.4961C427.505 23.623 425.715 27.8548 422.134 31.1914C418.553 34.528 413.752 36.1963 407.729 36.1963C401.789 36.1963 396.987 34.528 393.325 31.1914C389.744 27.8548 387.954 23.623 387.954 18.4961ZM514.785 187.441C504.531 187.441 495.335 185.814 487.197 182.559C479.059 179.222 472.142 174.624 466.445 168.765C460.83 162.905 456.517 156.11 453.506 148.379C450.495 140.566 448.989 132.266 448.989 123.477V118.594C448.989 108.584 450.413 99.4287 453.262 91.1279C456.11 82.8271 460.179 75.625 465.469 69.5215C470.84 63.418 477.35 58.7386 485 55.4834C492.65 52.1468 501.276 50.4785 510.879 50.4785C520.238 50.4785 528.538 52.0247 535.781 55.1172C543.024 58.2096 549.087 62.6042 553.97 68.3008C558.934 73.9974 562.677 80.8333 565.2 88.8086C567.723 96.7025 568.984 105.492 568.984 115.176V129.824H464.004V106.387H534.438V103.701C534.438 98.8184 533.543 94.4645 531.753 90.6396C530.044 86.7334 527.44 83.641 523.94 81.3623C520.441 79.0837 515.965 77.9443 510.513 77.9443C505.874 77.9443 501.886 78.9616 498.55 80.9961C495.213 83.0306 492.487 85.8789 490.371 89.541C488.337 93.2031 486.79 97.5163 485.732 102.48C484.756 107.363 484.268 112.734 484.268 118.594V123.477C484.268 128.766 485 133.649 486.465 138.125C488.011 142.601 490.168 146.466 492.935 149.722C495.783 152.977 499.201 155.5 503.188 157.29C507.257 159.08 511.855 159.976 516.982 159.976C523.33 159.976 529.23 158.755 534.683 156.313C540.216 153.791 544.977 150.007 548.965 144.961L566.055 163.516C563.288 167.503 559.504 171.328 554.702 174.99C549.982 178.652 544.285 181.663 537.612 184.023C530.939 186.302 523.33 187.441 514.785 187.441ZM643.569 159.976C647.882 159.976 651.707 159.162 655.044 157.534C658.381 155.825 660.985 153.465 662.856 150.454C664.81 147.362 665.827 143.74 665.908 139.59H698.989C698.908 148.867 696.426 157.127 691.543 164.37C686.66 171.532 680.109 177.188 671.89 181.338C663.67 185.407 654.474 187.441 644.302 187.441C634.048 187.441 625.096 185.732 617.446 182.314C609.878 178.896 603.571 174.176 598.525 168.154C593.48 162.051 589.696 154.971 587.173 146.914C584.65 138.776 583.389 130.068 583.389 120.791V117.251C583.389 107.892 584.65 99.1846 587.173 91.1279C589.696 82.9899 593.48 75.9098 598.525 69.8877C603.571 63.7842 609.878 59.0234 617.446 55.6055C625.015 52.1875 633.885 50.4785 644.058 50.4785C654.881 50.4785 664.362 52.5537 672.5 56.7041C680.719 60.8545 687.148 66.7952 691.787 74.5264C696.507 82.1761 698.908 91.25 698.989 101.748H665.908C665.827 97.3535 664.891 93.3659 663.101 89.7852C661.392 86.2044 658.869 83.3561 655.532 81.2402C652.277 79.043 648.249 77.9443 643.447 77.9443C638.32 77.9443 634.129 79.043 630.874 81.2402C627.619 83.3561 625.096 86.2858 623.306 90.0293C621.515 93.6914 620.254 97.8825 619.521 102.603C618.87 107.241 618.545 112.124 618.545 117.251V120.791C618.545 125.918 618.87 130.841 619.521 135.562C620.173 140.282 621.393 144.473 623.184 148.135C625.055 151.797 627.619 154.686 630.874 156.802C634.129 158.918 638.361 159.976 643.569 159.976ZM784.072 52.9199V77.8223H707.168V52.9199H784.072ZM726.211 20.3271H761.367V145.205C761.367 149.03 761.855 151.96 762.832 153.994C763.89 156.029 765.436 157.453 767.471 158.267C769.505 158.999 772.069 159.365 775.161 159.365C777.358 159.365 779.312 159.284 781.021 159.121C782.811 158.877 784.316 158.633 785.537 158.389L785.659 184.268C782.648 185.244 779.393 186.017 775.894 186.587C772.394 187.157 768.529 187.441 764.297 187.441C756.566 187.441 749.811 186.18 744.033 183.657C738.337 181.053 733.942 176.903 730.85 171.206C727.757 165.509 726.211 158.022 726.211 148.745V20.3271ZM875.503 148.501C875.503 145.978 874.771 143.7 873.306 141.665C871.841 139.631 869.115 137.759 865.127 136.05C861.221 134.259 855.565 132.632 848.159 131.167C841.486 129.702 835.26 127.871 829.482 125.674C823.786 123.395 818.822 120.669 814.59 117.495C810.439 114.321 807.184 110.578 804.824 106.265C802.464 101.87 801.284 96.8652 801.284 91.25C801.284 85.7161 802.464 80.5078 804.824 75.625C807.266 70.7422 810.724 66.429 815.2 62.6855C819.757 58.8607 825.291 55.8903 831.802 53.7744C838.394 51.5771 845.799 50.4785 854.019 50.4785C865.493 50.4785 875.34 52.3096 883.56 55.9717C891.86 59.6338 898.208 64.6794 902.603 71.1084C907.078 77.4561 909.316 84.6989 909.316 92.8369H874.16C874.16 89.4189 873.428 86.3672 871.963 83.6816C870.579 80.9147 868.382 78.7581 865.371 77.2119C862.441 75.5843 858.617 74.7705 853.896 74.7705C849.99 74.7705 846.613 75.4622 843.765 76.8457C840.916 78.1478 838.719 79.9382 837.173 82.2168C835.708 84.4141 834.976 86.8555 834.976 89.541C834.976 91.5755 835.382 93.4066 836.196 95.0342C837.091 96.5804 838.516 98.0046 840.469 99.3066C842.422 100.609 844.945 101.829 848.037 102.969C851.211 104.027 855.117 105.003 859.756 105.898C869.277 107.852 877.782 110.415 885.269 113.589C892.756 116.681 898.696 120.913 903.091 126.284C907.485 131.574 909.683 138.532 909.683 147.158C909.683 153.018 908.381 158.389 905.776 163.271C903.172 168.154 899.429 172.427 894.546 176.089C889.663 179.67 883.804 182.477 876.968 184.512C870.213 186.465 862.604 187.441 854.141 187.441C841.852 187.441 831.436 185.244 822.891 180.85C814.427 176.455 807.998 170.881 803.604 164.126C799.29 157.29 797.134 150.291 797.134 143.13H830.459C830.622 147.931 831.842 151.797 834.121 154.727C836.481 157.656 839.451 159.772 843.032 161.074C846.694 162.376 850.641 163.027 854.873 163.027C859.43 163.027 863.215 162.417 866.226 161.196C869.237 159.894 871.515 158.185 873.062 156.069C874.689 153.872 875.503 151.349 875.503 148.501Z" fill="white"/>
              </svg>



              <BiCodeAlt size={70}/>
            </Link>

          </div>


        </div>
        
        <div className='hidden m-5 lg:flex items-center justify-center rounded-2xl
                bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm
                bg-opacity-20 hover:scale-[105%] ease-in-out duration-300 text-white'>
          <Contact/>
        </div>
      </div>
    </div>
  )
}
