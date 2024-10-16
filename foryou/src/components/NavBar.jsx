import React, { useState } from 'react'
import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    var navigate=useNavigate()
    var [showMenu,setShowMenu]=useState(false)
    var [token,setToken]=useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="Logo" className='w-44 cursor-pointer' />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden' />
            </NavLink>
            <NavLink to="about">
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden' />
            </NavLink>
            <NavLink to="contact">
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex  items-center gap-4'>
            {token ? 
              <div className='flex items-center gap-4 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile-pic" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="drop-down" />
                <div className='hidden absolute top-0 right-0 text-base font-medium pt-14 text-gray-600 z-20 group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black'>my profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black'>my appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black'>logout</p>
                    </div>
                </div>
              </div>
              :
              <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden  md:block'>Create Account</button>

            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* --------mobile ------- */}
            <div className={`${showMenu ? 'fixed w-full ':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-500 `}>
                <div className='flex items-center justify-between px-5 py-6 '>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-3 mt-5 px-5 text-lg font-meidum '>
                <NavLink  className="px-4 py-2 rounded font-medium text-xl inline-block" onClick={()=>setShowMenu(false)} to="/"><p className='px-4 py-2 rounded-xl'>Home</p></NavLink>
                <NavLink className="px-4 py-2 rounded font-medium text-xl inline-block" onClick={()=>setShowMenu(false)} to="/doctors"><p className='px-4 py-2 rounded-xl'>All Doctors</p></NavLink>
                <NavLink className="px-4 py-2 rounded font-medium text-xl inline-block" onClick={()=>setShowMenu(false)} to="/about"><p className='px-4 py-2 rounded-xl'>About</p></NavLink>
                <NavLink className="px-4 py-2 rounded font-medium text-xl inline-block" onClick={()=>setShowMenu(false)} to="/contact"><p className='px-4 py-2 rounded-xl'>Contact</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar
