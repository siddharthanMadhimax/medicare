import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex  md:flex-row rounded-lg px-6 md:px-10 lg:px-20 bg-primary flex-wrap'>
        {/* ----left side---- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-white text-3xl md:text-4xl  font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appointments <br />With trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="group-profile" />
                <p>simply browse our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointments hassle-free</p>
            </div>
            <a href="#speciality" className='flex items-center bg-white gap-2 rounded-full px-8 py-3 text-gray-600 m-auto md:m-0 hover:scale-105 transition all duration-300'>
                Book Appointments <img src={assets.arrow_icon} className='w-3 ' alt="" />
            </a>
        </div>
        {/* ----right side ---- */}
        <div className='md:w-1/2 relative '>
            <img src={assets.header_img} alt="" className='w-full md:absolute bottom-0 rounded-lg' />
        </div>
    </div>
  )
}

export default Header