import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  var [userData,setUserData]=useState({
    name:'Siddhu',
    image:assets.profile_pic,
    email:'Siddhu@gamil.com',
    phone:'+11 346-9822',
    address:{
      line1:'new cross street',
      line2:'cicle,church road,vellechery',

    },
    gender:'male',
    dob:'2002-09-20'
  })
  var [isEdit,setIsEdit]=useState(false)
  return (
    <div className='flex max-w-lg  flex-col ga-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {isEdit? <input type='text' className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' value={userData.name} onChange={(e)=>setUserData(prev=>({...prev,name:e.target.value}))}/>
      : <p className='font-medium text-3xl text-neutral-80 mt-4'>{userData.name}</p>}
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500'>
          <p className='font-medium  '>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium '>Phone:</p>
          {isEdit? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={(e)=>setUserData(prev=>({...prev,phone:e.target.value}))}/>
           : <p className='text-blue-400'>{userData.phone}</p>}

           <p className='font-medium'>Address:</p>
           {isEdit ? 
           
           <p>
             <input type='text' className='bg-gray-50' value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))}/>  
            <br/>
          <input type='text' className='bg-gray-50' value={userData.address.line2}  onChange={(e)=>setUserData(prev=>({...prev,address:{...prev,address,line2:e.target.value}}))}/>
           </p> :
           <p className='text-gray-500'>
            {userData.address.line1}
            <br />
            {userData.address.line2}
            </p>
            }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-600'>
          <p className='font-medium '>Gender:</p>
          {isEdit ? 
          <select  className='max-w-20 bg-gray-50' onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
            <option value="Male">Male</option>
            <option value="female">Female</option>
            <option value="Trans">Trans</option>
            <option value="not intrested">Not intrested</option>
          </select> :
          <p className='text-gray-500'>
            {userData.gender}
          </p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit ? 
            <input className='max-w-28 bg-gray-100' type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}/>
            :
            <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit ?
          <button className='border border-zinc-500 px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-400' onClick={()=>setIsEdit(false)}>Save Information</button>
          :
          <button className='border border-zinc-500 px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-400' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>

  )
}

export default MyProfile