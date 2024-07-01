import { Outlet } from "react-router-dom"
import MyNavBar from "./components/Navbar"
import './App.css'

function App() {

  return (
    <>
    <MyNavBar />
    <Outlet />
    </>
  )
}

export default App
