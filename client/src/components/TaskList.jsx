import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getAllTasks } from '../redux/taskSlice';
import ListCard from './ListCard';
const TaskList = () => {
  const user = useSelector((state)=>state.auth);
  const tasks = useSelector((state)=>state.task);
  const {currentUser} = user
  const {AllTasks} = tasks;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);
  return (
    <div>
      {
        Object.values(AllTasks).map((item)=>{
          return <ListCard key={item._id} item={item}/>
        })
      }
    </div>
  )
}

export default TaskList