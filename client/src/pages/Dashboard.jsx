import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
const Dashboard = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh] flex">
        <div className="w-[15%]"><Sidebar/></div>
        <div className="w-[85%] mt-[2rem]">
          <div className="w-[100%] text-center ">
          <h2 className="font-bold text-[32px]">Task Status Dashboard</h2>
          <div className="flex w-[100%] justify-evenly">
            <div className="w-[150px] h-[100px] rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] m-[3rem_0] flex flex-row justify-center items-center">todo</div>
            <div className="w-[150px] h-[100px] rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] m-[3rem_0] flex flex-row justify-center items-center">doing</div>
            <div className="w-[150px] h-[100px] rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] m-[3rem_0] flex flex-row justify-center items-center">done</div>
          </div>
          <div>
            <Link to="/taskmanager" className='ml-[10px] p-[10px] border-none cursor-pointer outline-none rounded-[5px] inline-block  bg-red-500 text-white min-w-[150px] w-[20rem]'>Create Task</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard