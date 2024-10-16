import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className=''>
      <div className='text-center'>
        <p className='text-gray-500 font-medium text-xl'>ABOUT <span className='text-gray-900'>US</span></p>
        <hr className='mt-4  bg-gray-800' />
      </div>
      <div className='flex flex-col sm:flex-row gap-6 mt-5'>
        <img className='w-1/3 max-sm:w-[400px]' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-6 items-center justify-center border px-5 text-gray-600 border-gray-400 '>
         <p>
            At <strong>Your Health Clinic</strong>, we are dedicated to providing compassionate care and the highest level of medical expertise.
          </p>
          <p>
            Our mission is to ensure that every patient receives personalized and timely treatment in a comfortable environment. 
          </p>
          <b></b>
          <p>
            We offer convenient online appointment scheduling and telehealth services for those unable to visit in person. Your well-being is our priority.
          </p>
        </div>
      </div>
      <div>
        <p className='mt-10 text-gray-900 fobt-medium text-lg'>why choose us</p>
        <div className='flex max-sm:flex-col mt-10 gap-4'>
          <div className='border border-gray-700 px-5 py-4 text-sm text-gray-500 rounded-lg hover:scale-105 transition-all duration-500'>
            <p className='mb-4 text-gray-900 text-center'>Efficiency</p>
            <p>Patients and doctors value quick and effective processes. An efficient appointment system allows patients to book, modify, or cancel appointments seamlessly, without long wait times or administrative delays.</p>
          </div>
          <div className='border border-gray-700 px-5 py-4 text-sm text-gray-500 rounded-lg hover:scale-105 transition-all duration-500'>
            <p className='mb-4 text-gray-900 text-center'>Convenience</p>
            <p>A user-friendly interface ensures that patients can easily navigate the system to find available slots, book appointments, and access information. This is especially important for elderly patients or those with limited tech knowledge.</p>
          </div>
          <div className='border border-gray-700 px-5 py-4 text-sm text-gray-500 rounded-lg hover:scale-105 transition-all duration-500'>
            <p className='mb-4 text-gray-900 text-center'>Personalization</p>
            <p>Personalized appointment suggestions, based on a patient's medical history and preferences, enhance the overall experience. The system can recommend follow-ups or preventive care tailored to each individual profile.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About