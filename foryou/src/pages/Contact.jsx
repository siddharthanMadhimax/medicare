import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='p-8'>
      <p className='text-center text-gray-600 font-medium text-lg'>CONTACT <span className='text-gray-900'>US</span></p>
      <div className='flex'>
      <div className='flex  mt-14 gap-14 max-sm:flex-col max-sm:items-center jusity-center'>
       {/* ----left side----- */}
       <div>
        <img className='w-[340px] max-lg:w-100' src={assets.contact_image} alt="" />
       </div>
       {/* ------right side------- */}
       <div className='flex flex-col gap-8 mt-3 text-gray-700 max-w-[200px]'>
        <div>
        <h1 className='text-gray-800 mb-2 font-medium'>Our office</h1>
        <p className='text-sm'>1007 vellechery new cross street phenix mall opposite </p>
        </div>
       <div>
       <p className='text-sm'>Tel:(405) 555-01432</p>
       <p className='text-sm'>Email:foryou@gmail.com</p>
       </div>
        <div>
          <h1 className='font-medium mb-2'>CAREEARS AT FORYOU</h1>
          <p className='text-sm'>know more about our terms and openings</p>
          <button className='mt-5 border border-black px-5 py-3 hover:bg-black hover:text-white transition-all duration-500 rounded-lg hover:rounded-xl'>Know More</button>
        </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Contact