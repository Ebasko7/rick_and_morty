import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


function CharPage() {
    const [character, setCharacter] = useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(()=>{
        const getCharacter = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(response.data)
            setCharacter(response.data)
        }
        getCharacter()
    },[id])

console.log('character is', character)
if (character.id === null){
    return <h2>Loading</h2>
}
  return (
    <>
    <div className="flex justify-center items-center min-h-screen"> 
        <img src={character.image} alt="image" />
        <h1>{character.name}</h1>
        <div>{character.status}</div>
        <div>{character.species}</div>
    </div>
    </>
  )
}

export default CharPage