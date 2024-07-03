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

    <div> 
        <h1>{character.name}</h1>
        <img src={character.image} alt="image" />
        <p>{character.status}</p>
        <p>{character.species}</p>
    </div>
    
  )
}

export default CharPage