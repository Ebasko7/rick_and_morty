import React from 'react'
import Card from "../components/Card"
import { useOutletContext} from 'react-router-dom'

function FavoritesPage() {
    const { favorites } = useOutletContext();
  
    return (
      <div>
        <h2>All Characters</h2>
        {favorites.length ? 
          favorites.map((charInfo, i) => (<Card key={i} characterInfo={charInfo} />)) 
          : <div>Loading</div>
        }
      </div>
    );
  }
  
  export default FavoritesPage;

