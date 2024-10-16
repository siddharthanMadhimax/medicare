import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointments = () => {
  var {docId}=useParams()
  
  console.log(docId)
  var {doctors,currencySymbol}=useContext(AppContext)
  var daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
  var [docInfo,setDocInfo]=useState(null)
  var [docSlots,setDocSlots]=useState([])
  var [slotIndex,setSlotIndex]=useState(0)
  var [slotTime,setSlotTime]=useState('')

  var fetchDocInfo=async()=>{
    var docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo)
    // console.log(docInfo)
  }
  var getAvailableSlot= async()=>{
    setDocSlots([])

    // getting current date
    var today=new Date()
    for (let i=0;i<7;i++){
      // getting date with index
      var currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time with index
      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // settng hours
      if(today.getDate()===currentDate.getDate()){
        console.log(currentDate.setHours(currentDate.getHours()))
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+ 1 : 10)
        console.log(currentDate.getHours())
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots=[]
      while(currentDate < endTime){
        let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',})
        // add slot to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime

        })
        // Increment current time by 30 min

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev=>([...prev,timeSlots]))
    }
  }
  useEffect(()=>{
    getAvailableSlot()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  return docInfo &&  (
    <div>
      {/* -------doc details------- */}
      <div className='flex flex-col sm:flex-row gap-4 '>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg ' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg px-7  py-8  bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/* --------doc info:name degree experience */}
         <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree}-{docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full bg-gray-200'>{docInfo.experience}</button>
        </div>
        {/* -------doctors about------- */}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium mt-3 text-gray-900'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-700 max-w[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>Appointement fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      {/* -------BOOKING SLOTS---------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white':'border border-gray-600 '}`}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>  
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt 4'>
         {docSlots.length && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 mt-5 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ? 'bg-primary text-white':'text-gray-600 border border-gray-300 '}`}>
            {item.time.toLowerCase()}
          </p>
         ))}
        </div>
        <button className='bg-primary mt-7 rounded-full  px-10 py-3 text-white font-light text-sm'>Book Appointment</button>
      </div>
      {/* ----------related doc---------- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointments