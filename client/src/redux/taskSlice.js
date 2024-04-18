import { createSlice } from "@reduxjs/toolkit";
import history from "../history";
import axios from 'axios';

const initialTask = localStorage.getItem('task')
    ? JSON.parse(localStorage.getItem('task')) : null;

const initialState = {
    TaskData:initialTask,
    AllTasks:{},
}
export const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers:{
        taskAddedSuccessfully : (state,action)=>{
            state.TaskData = action.payload;
        },
        taskAddFailure : (state)=>{
            return state;
        },
        getAllTaskSuccess : (state,action)=>{
            state.AllTasks = action.payload;
        },
        getAllTaskFailure : (state)=>{
            return state;
        },
        editTaskSuccess:(state,action)=>{
            state.TaskData = action.payload
        },
        deleteTaskSuccess: (state, action) => {
            state.AllTasks = Object.keys(state.AllTasks).reduce((acc, key) => {
                if (key !== action.payload) {
                    acc[key] = state.AllTasks[key];
                }
                return acc;
            }, {});
        },
        deleteTaskFailure: (state)=>{
            return state;
        },
    },
});

export const {
    taskAddFailure,taskAddedSuccessfully,getAllTaskFailure,getAllTaskSuccess,deleteTaskSuccess,deleteTaskFailure,editTaskSuccess
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task,id) => async(dispatch)=>{
    const taskData = {
        task,
        id,
    }
    const response = await axios.post('http://localhost:4000/task/add', taskData);
    if(response) {
        localStorage.setItem('task', JSON.stringify(response.data));
        dispatch(taskAddedSuccessfully(response.data));
        window.location.reload();
    }
    else{
        dispatch(taskAddFailure());
    }
};

export const getAllTasks = (token,id)=>async(dispatch)=>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        },
        params:{
            id,
        }
    }
    try{
        const response = await axios.get("http://localhost:4000/task/tasks",
            config
        );
        if(response){
            dispatch(getAllTaskSuccess(response.data));
        }
    }
    catch(error){
        if(error.response.status===400){
            dispatch(getAllTaskFailure());
        }
    }
}

export const arrowClick = (item,string)=>async()=>{
    let taskData = {
        id:item._id,
        status:item.status,
        string,
        
    }
    try{
        let response = await axios.put(`http://localhost:4000/task/${taskData.id}`,
        taskData);
        if(response){
            window.location.reload();
        }
    } catch(error){
        console.log(error);
    }

}
export const deleteTask = (taskId) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:4000/task/${taskId}`);
        if (response) {
            dispatch(deleteTaskSuccess(taskId));
        } else {
            dispatch(deleteTaskFailure());
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        dispatch(deleteTaskFailure());
    }
};
export const editTask = (updatedTask) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:4000/task/${updatedTask.id}`, updatedTask);
      if (response) {
        dispatch(editTaskSuccess(response.data)); 
        window.location.reload(); 
      } else {
        dispatch(taskAddFailure());
      }
    } catch (error) {
      console.error("Error editing task:", error);
      dispatch(taskAddFailure());
    }
  };
  
  