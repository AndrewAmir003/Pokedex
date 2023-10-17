import React, { useState, useEffect } from "react"
import { PokemonData } from './components'


function App() {
    const [pokemonData, setPokemonData] = useState([]);
    return (
      <>
        <PokemonData 
        pokemonData={pokemonData} 
        setPokemonData={setPokemonData}/>
      </>
    );
}

export default App;

