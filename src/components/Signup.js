import React from 'react';
import {Link} from "react-router-dom";
import userContext from "../utils/userContext";
import {useContext} from "react";

const Signup = () => {
const{setFirstName,
  setLastName,setEmailId,setNumber
} =  useContext(userContext);
  return (
    <>
      <form className=" w-3/12 mt-24 mb-5 border-[1px] border-black py-12 px-5 mx-auto right-0 left-0 rounded-md">
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="text"  placeholder="First Name"  onChange={(e)=>{setFirstName(e.target.value)}}></input>
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}></input>
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="text" placeholder="Email" onChange = {(e)=>{setEmailId(e.target.value)}}></input>
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="number" placeholder="Mobile" onChange={(e)=>{setNumber(e.target.value)}}></input>
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="password" placeholder="Password"></input>
      <Link to ="/login"><button className=" w-full py-1 border-black bg-emerald-200 text-white rounded-sm font-bold">Sign up</button></Link>
      </form>
      <div className="w-52 ml-[550px] mb-5">
      Forgot Password?
      </div>
      <div className="border-[1px] border-black w-3/12 mx-auto right-0 left-0 py-2 px-2 ">
      Have an account?<Link to='/login'> Log in </Link>
      </div>
    </>
  )
 
}

export default Signup;