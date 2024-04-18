import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const {auth} = useSelector((state) => ({ ...state}));
  const {currentUser} = auth; 
  return (
    <div>
      <ul className='sidebar bg-teal-600 text-white h-[100vh] p-[1rem] max-w-[15vw] '>
        <li className='list-item m-[1rem_0]'><h5 className='text-[20px] font-bold'>{currentUser.username}</h5></li>
        <li className='list-item m-[1rem_0]'>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className='list-item m-[1rem_0]'>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar