import Header from "./components/Header"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TaskManager from "./pages/TaskManager"
import EditTask from "./components/EditTask"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/taskmanager" element={<TaskManager/>}></Route>
          <Route path="/edit/:id" element={<EditTask/>}></Route>
          
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          
        </Routes>
      </Router>  
    </div>
  )
}

export default App
