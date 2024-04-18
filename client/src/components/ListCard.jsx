import React from 'react'
import { BiChevronLeft,BiChevronRight } from 'react-icons/bi'
import { RiChatDeleteFill } from "react-icons/ri";
import { arrowClick,deleteTask } from '../redux/taskSlice';
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
const ListCard = ({item}) => {
    const dispatch = useDispatch();
    const ArrowClick = (string)=>{
        dispatch(arrowClick(item,string));
    };
    const handleDelete = ()=>{
        dispatch(deleteTask(item._id));
    }
    
  return (
    <div>
        <ul className='w-[90%] flex justify-between items-center m-[1rem_auto] border-[1px] border-black rounded-sm'>
            <li className='p-[1rem] flex-1 '><p className='text-[14px]'>{item._id}</p></li>
            <li className='p-[1rem] flex-1'><p className='text-[14px]'>{item.task}</p></li>
            <li className='p-[1rem] flex-1'><p className='text-[14px]'>{item.status}</p></li>
            <li className='p-[1rem] flex-1'>
                <button disabled = {item.status === 'backlog'} onClick={()=>ArrowClick('left')}>
                    <BiChevronLeft/>
                </button>
                <button disabled = {item.status === 'done'} onClick={()=>ArrowClick('right')}>
                    <BiChevronRight/>
                </button>
            </li>
            <li className="p-[1rem] flex-1">
                <Link to={`/edit/${item._id}`}>edit</Link>
            </li>
            <li className='p-[1rem] flex-1'><button onClick={handleDelete}><RiChatDeleteFill /></button></li>
        </ul>
    </div>
  )
}

export default ListCard