import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    var navigate=useNavigate()
  return (
    <div className='flex bg-primary items-center rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* -----Left side----- */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl text-white lg:text-5xl font-semibold'>
        <p className=''>Book Appointment</p>
        <p className='mt-4'>With 100+ trusted doctors</p>
        </div>
        <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white text-md rounded-xl px-10 py-3 mt-6 text-primary hover:scale-105 transition-all duration-500 '>Create Account</button>
      </div>

      {/* -----Right side (image)----- */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img 
          src={assets.appointment_img} 
          alt="Appointment"  
          className='w-full absolute bottom-0 right-0 -top-[190px] max-w-md'
        />
      </div>
    </div>
  );
};

export default Banner;
