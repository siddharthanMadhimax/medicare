import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40' />
                <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Effortlessly book appointments with over 100+ trusted doctors through our user-friendly medical booking platform. Get access to top healthcare professionals at your convenience, anytime, anywhere.</p>
            </div> {/* center section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div> {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-6380448496</li>
                    <li>Siddhu@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* -----copy rights----- */}
        <div className=''>
            <hr />
            <p className='text-center py-5 text-sm'>Copyrights 2024@ Medicare all rights reserved </p>
        </div>
    </div>
  )
}

export default Footer