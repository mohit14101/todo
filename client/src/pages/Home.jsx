import React from 'react'
import background from "../assets/bg.jpeg"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Home = () => {
  const {auth} = useSelector((state)=>({...state}));
  const {currentUser} = auth;

  return (
    <div className='w-[100%] h-[100%] static ' >
            <img src={background} className='w-[100%] h-[100vh]'></img>
            <div className='w-[50%] flex flex-col  justify-center items-center  absolute top-[45%] left-[25%]'>
            <h2 className='font-bold text-[42px]'>Organize it all</h2>
            <p className='font-[400] text-[26px]'>With Todo App</p>
            {currentUser && currentUser.token ? (
              <Link to='/dashboard' className='text-center p-[10px] border-none cursor-pointer outline-none rounded-[5px] bg-red-500 min-w-[150px] font-semibold  italic'>Get Started</Link>
            ) : (
              <Link to="/signin" className='text-center p-[10px]  border-none cursor-pointer outline-none rounded-[5px] bg-red-500 min-w-[150px] font-semibold  italic'>Get Started</Link>
            )}
            
            </div>
    </div>
  )
}

export default Home