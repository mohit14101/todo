
import { useState } from 'react'
import { addTask } from '../redux/taskSlice'
import {useDispatch,useSelector} from 'react-redux';
const AddTask = () => {
  const dispatch = useDispatch();
  const {auth} = useSelector((state)=>({...state}));
  const {currentUser} = auth
  const[state,setState]  = useState({
    task:'',
  })
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTask(state.task,currentUser.id))
    setState({
      task:'',
    })

  }
  return (
    <div>
      <div className='w-[100%]'>
        <form onSubmit={handleSubmit} className='w-[70%] m-[3rem] flex'>
          <input 
            type='text' 
            name='task' 
            placeholder='add your task' 
            onChange={handleChange}
            value={state.task}
            className='p-[5px] w-[30rem] border-none outline-none bg-gray-100 rounded-[5px] '
          ></input>
          <button className='ml-[10px] p-[10px] border-none cursor-pointer outline-none rounded-[5px] inline-block bg-gray-100 min-w-[150px]  '>Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask