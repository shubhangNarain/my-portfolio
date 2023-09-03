import React from 'react'

const Contact = () => {
  return (
    <div className='p-10 flex items-start'>
        <form className='grid grid-rows-3'>
            <div className='p-5 text-7xl font-bold '>
                Get In Touch
            </div>

            <div className='flex flex-col'>
                <div className='grid grid-cols-2'>
                    <span className='py-2 mx-2 text-2xl italic font-light'>First Name</span>
                    <span className='py-2 mx-2 text-2xl italic font-light'>Last Name</span>
                </div>
                <div className='grid grid-cols-2'>
                    <input className='mx-2 p-2 rounded-xl' type='text' placeholder='First Name' />
                    <input className='mx-2 p-2 rounded-xl' type='text' placeholder='Last Name' />
                </div>

                <div className='grid grid-rows-2'>
                    <span className='py-2 mx-2 text-2xl italic font-light'>Email</span>
                    <input className='mx-2 p-2 rounded-xl' type='text' placeholder='Email address' />
                </div>
            </div>

            <div className='grid grid-rows-2'>
                    <span className='py-5 mx-2 text-2xl italic font-light'>Message</span>
                    <input className='p-0 m-2 p-2 rounded-xl' type='text' placeholder='How we doin today?!' />
            </div>


        </form>
    </div>
  )
}

export default Contact