import Login from "./components/Login/Login"
import Home from  "./components/Home/Home"
import { BrowserRouter , Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App