import React, {useContext} from 'react'
import ChandraMahesh_ProfilePic from "../images/ChandraMahesh_ProfilePic.jpg"
import userContext from "../utils/userContext";
import {Link} from "react-router-dom";

const Profile = () => {
 
 const {firstname, lastname, emailid, mobilenumber,
  universityname,
  degree,
  specialization,
  fromdate,
  todate,
  address,
  city,
  state,
  pincode,
  setUniversityName,
  setDegree,
  setSpecialization,
  setFromDate,
  setToDate,
  setAddress,
  setCity,
  setState,
  setPincode } = useContext(userContext);
 console.log(userContext);

  return (
    <>
      <div className="border-[2px] shadow-2xl border-gray-500 rounded-md w-6/12 h-full mt-10 mx-auto right-0 left-0">

       <div className="p-4 flex items-center ">
          <img className="w-20 h-20 object-fill rounded-full" src={ChandraMahesh_ProfilePic} alt="Loading.."/>
          <div className="font-serif  pl-5">
           <div>{firstname}<span>{lastname}</span></div>
           <div>{emailid}</div>
           <div>+91 {mobilenumber}</div>
          </div>
       </div>

       <div className="ml-4  w-6/12 p-4 mb-5">
          <div className="text-lg font-medium font-serif pb-4">Education</div>
          <div className="font-serif">
            University/College: <input className="border-[1px] rounded-md border-gray-400 mb-2 w-full py-3 px-2" type="text" placeholder="Name " value={universityname} onChange={(e)=>setUniversityName(e.target.value)}/>
            <br/>
            Degree: <input className="border-[1px] rounded-md border-gray-400 mb-2 w-full py-3 px-2" type="text" placeholder="Eg: B.Tech/BE" value={degree} onChange={(e)=>setDegree(e.target.value)}/>
            <br/>
            Specialization: <input className="border-[1px] rounded-md border-gray-400 mb-2 w-full py-3 px-2" type="text" placeholder="Eg: Computer Science and Engineering" value={specialization} onChange={(e)=>setSpecialization(e.target.value)}/>
            <br/>
            <div className="flex justify-between mt-6">
            From:<input type="date" className= "border-[1px] rounded-md border-gray-400" value={fromdate} onChange={(e)=>setFromDate(e.target.value)} />
            To:<input type="date" className= "border-[1px] rounded-md border-gray-400" value={todate} onChange={(e)=>setToDate(e.target.value)} />
            </div>
          </div>
        </div>

       <div className="ml-4 w-6/12 p-4 mb-5">
          <div className="text-lg font-medium font-serif pb-2">Current Address</div>
          <div className="font-serif">
            Adress: <input className="border-[1px] shadow-lg  border-gray-400 rounded-md mb-2 w-full py-3 px-2" type="address" placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <br/>
            city: <input className="border-[1px] shadow-lg border-gray-400 rounded-md mb-2 w-full py-3 px-2" type="city" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}/>
            <br/>
            State: <input className="border-[1px] shadow-lg border-gray-400 rounded-md mb-2 w-full py-3 px-2" type="state" placeholder="Enter State" value={state} onChange={(e)=>setState(e.target.value)}/>
            <br/>
            pincode: <input className="border-[1px] shadow-lg border-gray-400 rounded-md  mb-2 w-full py-3 px-2" type="pincode" placeholder="Enter Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
          </div>
        </div>

  <Link to="/confirmpage"><button className="ml-64 bg-blue-600 from-neutral-100 font-serif py-2 px-4 mb-10 text-white">Submit</button></Link>
       

      </div>
    </>
  )
}

export default Profile