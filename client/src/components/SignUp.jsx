import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { register } from '../redux/authSlice';
const SignUp = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState({
        email:"",
        password:"",
        username:"",
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(
            register({
                username:state.username,
                password:state.password,
                email:state.email,
            })
        )
    };
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    return (
    <div className='w-[full] h-[100vh] flex justify-center items-center'>
        <div className='w-[50%] h-[400px]'> 
            <form onSubmit={handleSubmit} 
            className='w-[100%] h-[100%] p-[10px] flex flex-col justify-center items-center
            shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] rounded-[10px] '>
                <h4 className='font-[600] text-[25px] mb-[10px]'>Sign Up</h4>
                <div className='mb-[1rem] w-[50%] text-center '>
                    <input 
                    type='text' 
                    placeholder='Enter Name' 
                    name='username'
                    value={state.username} 
                    onChange={handleChange}
                    required 
                    className='w-[100%] p-[1rem] border-[2px] border-solid border-gray-300 rounded-sm '></input>
                </div>
                <div className='mb-[1rem] w-[50%] text-center '>
                    <input 
                    type='email' 
                    placeholder='Enter Email' 
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    required 
                    className='w-[100%] p-[1rem] border-[2px] border-solid border-gray-300 rounded-sm'></input>
                </div>
                <div className='mb-[1rem] w-[50%] text-center '>
                    <input 
                    type='password' 
                    placeholder='Enter Password' 
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    required 
                    className='w-[100%] p-[1rem] border-[2px] border-solid border-gray-300 rounded-sm'></input>
                </div>
                <button className='ml-[10px] p-[10px] border-none cursor-pointer outline-none rounded-[5px] bg-gray-300 min-w-[150px]'>Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default SignUp