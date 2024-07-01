import CharCard from '../components/Card.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharactersPage (){
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        const getCharacters = async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
             console.log('heres the', response)
             setCharacters([...characters, ...response.data.results])
         }
    getCharacters()
    }, [])

    return(
        
    <Container>
      <Row>
        {characters.length ? (
            characters.map((data, i) => <CharCard key={i} data={data}/>)
        ): (
            <div>No Characters</div>
        )}
      </Row>
    </Container> 
         
        
    )
}

    export default CharactersPage