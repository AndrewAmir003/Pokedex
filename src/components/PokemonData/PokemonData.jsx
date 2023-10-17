import React, { useState, useEffect } from "react";

export default function PokemonData({
  inputText,
  pokemonData,
  setPokemonData,
}) {
  const [loading, setLoading] = useState(false); // setting the initial state of loading to false
  const [error, setError] = useState(null); // setting the initial value of error to null

  useEffect(() => {
    if (inputText) {
      fetchPokemonData(inputText);
    }
  }, [inputText]);

  async function fetchPokemonData(pokemonName) {
    setLoading(true); // when fetching the data setting it true so that the loading message appears
    setError(null); // make sure that when fetch is occurring there is no message
    try {
      const lowerName = pokemonName.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowerName}`
      );
      if (response.ok) {
        const data = await response.json();
        setPokemonData([data]);
      } else {
        setError("Pokemon not found"); // setting the message when an error occurs that will be displayed to the user
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setLoading(false);
  }, [pokemonData]); // when the data is fetched it changes the status of loading back to false

  return ( // if loading is true message appears for the user, if there is an error message displays the message to user
    <>
      <h2>POKEMON DATA</h2>
      {loading && <p>Finding the Pokemon</p>} 
      {error && <p>{error}</p>}
      {pokemonData.map((pokemon, i) => (
        <div key={i}>
          <h3>{pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </>
  );
}
