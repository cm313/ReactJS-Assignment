import React, {useContext} from 'react'
import userContext from "../utils/userContext";
import {Link} from "react-router-dom";

const ConfirmPage = () => {

const{firstname,
  lastname,
  emailid,
  mobilenumber,
  universityname,
  degree,
  specialization,
  fromdate,
  todate,
  address,
  city,
  state,
  pincode}= useContext(userContext);

  return (
    <div className="border-2 w-96 mx-auto right-0 left-0 mt-2 py-10 px-10 font-serif">
      <div className="font-bold text-center">Confirm Details</div>
       <div>{firstname}</div>
       <div>{lastname}</div>
       <div>{emailid}</div>
       <div>{mobilenumber}</div>
       <div>{universityname}</div>
       <div>{degree}</div>
       <div>{specialization}</div>
       <div>{fromdate}</div>
       <div>{todate}</div>
       <div>{address}</div>
       <div>{city}</div>
       <div>{state}</div>
       <div>{pincode}</div>

         <div className="flex justify-between pt-3">
          <button className="bg-orange-500 py-2 px-1 rounded-md">Confirm</button>
       <Link to='/profile'><button className="bg-blue-500 py-2 px-3 rounded-md ">Edit</button></Link>
          </div>

    </div>
  )
}

export default ConfirmPage