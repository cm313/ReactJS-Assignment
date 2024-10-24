import React from 'react';
import {Link} from  'react-router-dom';
import userContext from "../utils/userContext";

const Login = () => {

  return (
    <>
      <form className=" w-3/12 mt-32 mb-5 border-[1px] border-black py-12 px-5 mx-auto right-0 left-0 rounded-md">
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="text" placeholder="mobilenumber, username or email"></input>
        <input className=" border-[1px] border-black mb-4 p-2 w-full" type="password" placeholder="password"></input>
        <Link to="/profile"><button className=" w-full py-1 bg-emerald-200 text-white rounded-sm font-bold">Log in</button></Link>
      </form>
      <div className="w-52 ml-[550px] mb-5">
      Forgot Password?
      </div>
      <div className="border-[1px] border-black w-3/12 mx-auto right-0 left-0 py-2 px-2 ">
        Din't have an account?<Link to="/signup"> sign up </Link>
      </div>
    </>
  )
}

export default Login