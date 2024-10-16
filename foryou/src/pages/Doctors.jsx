import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
// import { doctors } from '../assets/assets'

const Doctors = () => {
  var  {speciality} =useParams()
  var {doctors}=useContext(AppContext)
  var [showFilter,setShowFilter]=useState(false)
  var [filterdDoc,setFilteredDoc]=useState([])
  var navigate=useNavigate()
  var applyFilter=()=>{
    if(speciality){
      setFilteredDoc(doctors.filter((doc)=>doc.speciality===speciality))
    }
    else{
      setFilteredDoc(doctors)
    }
  }
  console.log(speciality)
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  return (
    <div className=''>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter?"bg-primary text-white":''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filter</button>
        <div className={` flex-col gap-3 text-sm text-gray-600 ${showFilter ?"flex":'hidden sm:flex'}`}>
          <p onClick={()=>speciality==='General physician'? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='General physician' ?'bg-primary text-white' :''}`}>General physician</p>
          <p onClick={()=>speciality==='Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='Gynecologist' ?'bg-primary text-white' :''}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Dermatol0gist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='Dermatologist' ?'bg-primary text-white' :''}`}>Dermatologist</p>
          <p onClick={()=>speciality==='Pediatrician'? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='Pediatricians' ?'bg-primary text-white' :''}`}>Pediatricians</p>
          <p onClick={()=>speciality==='Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='Neurologist' ?'bg-primary text-white' :''}`}>Neurologist</p>
          <p onClick={()=>speciality==='Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded hover:translate-y-[-2px] transition-all cursor-pointer ${speciality==='Gastroenterologist' ?'bg-primary text-white' :''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6  '>
          {
            filterdDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointments/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img src={item.image} alt="" className='bg-blue-50' />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                  </div>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors