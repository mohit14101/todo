import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../redux/authSlice';
import history from '../history';
const Header = () => {
  const dispatch = useDispatch();
  const {auth} = useSelector((state) => ({ ...state }))
  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth'); 
    history.push('/signin');
    window.location.reload();
  }
  return (
    <div>
      <nav className='flex justify-between items-center h-[60px] p-[0_20px] bg-red-600'>
        <div>
          <h3 className='font-[300] text-[24px] text-white'>Todo App</h3>
        </div>
        <div>
            {auth.currentUser && auth.currentUser.token ? (
              <Link to='/signin' onClick={handleClick} className='ml-[10px] p-[10px] border-none outline-none rounded-[5px] bg-white min-w-[150px]'>Sign Out</Link>
            ) : (
              <div>
              <Link to="/signin" className='ml-[10px] p-[10px] border-none outline-none rounded-[5px] bg-white min-w-[150px]'>Sign In</Link>
              <Link to="/signup" className='ml-[10px] p-[10px] border-none outline-none rounded-[5px] bg-white min-w-[150px]'>Sign Up</Link>
              </div>
            )}
          
        </div>
      </nav>
    </div>
  )
}

export default Header
