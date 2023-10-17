import React, { useState, useEffect } from "react";
import { PokemonData, SearchPokemon } from "./components";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <>
      <h1>POKEDEX</h1>
      <SearchPokemon 
      inputText={inputText} 
      setInputText={setInputText} 
      />
      <PokemonData
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
}

export default App;
