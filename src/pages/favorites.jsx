import React from 'react';
import CharCard from '../components/Card';
import { useOutletContext } from 'react-router-dom';

function FavoritesPage() {
  const { favorites } = useOutletContext();

  return (
    <div>
      <h2>All Characters</h2>
      {favorites.length ? 
        favorites.map((charInfo) => (
          <CharCard key={charInfo.id} characterInfo={charInfo} /> 
        )) 
        : <div>Loading...</div> 
      }
    </div>
  );
}

export default FavoritesPage;
