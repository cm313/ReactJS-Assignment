import React from 'react'
import{createBrowserRouter, RouterProvider} from "react-router-dom"; 
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import ConfirmPage from "./ConfirmPage"


const Body = () => {

  const appRouter  = createBrowserRouter([
    {
     path: '/',
     element: <Signup />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path:'/profile',
      element: <Profile/>
    },
    {
      path:'/confirmpage',
      element: <ConfirmPage/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body