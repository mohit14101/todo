import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/taskSlice';
import history from '../history'; 

const EditTask = ({ taskId, initialTask }) => {
  const [task, setTask] = useState(initialTask || "");
  const dispatch = useDispatch(); 

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleEdit = () => {
    e.preventDefault();
    dispatch(editTask({ id: taskId, task }));
    history.push('/taskmanager');
    window.location.reload(); 
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-1/3 flex flex-col items-center justify-center bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleEdit}
          className="bg-gray-100 px-4 py-2 rounded-md focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTask;
