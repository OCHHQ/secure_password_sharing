import Login from "./components/Login/Login"
import Home from  "./components/Home/Home"
import Signup from "./components/Signup/Signup"
import { BrowserRouter , Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App