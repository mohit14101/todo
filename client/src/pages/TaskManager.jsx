import React from 'react'
import Sidebar from '../components/Sidebar'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

const TaskManager = () => {
  return (
    <div >
        <div className='w-[100%] flex '>
            <div className='w-[15%]'>
                <Sidebar/>
            </div>
            <div className='w-[85%]'>
                <div>
                    <AddTask/>
                </div>
                <div>
                    <TaskList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskManager