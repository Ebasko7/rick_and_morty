import { Outlet } from "react-router-dom"
import MyNavBar from "./components/Navbar"
import './App.css'
import React ,{ useState } from "react"

function App() {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (newFavorite) => setFavorites([...favorites, newFavorite])

  const removeFromFavorites = (favoriteToRemove) => setFavorites(
    favorites.filter(f => f.id !== favoriteToRemove.id)
  )

  const contextObj = {
    favorites: favorites,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  }

  return (
    <>
    <MyNavBar />
    <Outlet context={contextObj} />
    </>
  )
}

export default App
