import React, { useState, useEffect } from "react";

export default function PokemonData({pokemonData, setPokemonData}) {
 
    useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    const fetchApi = `https://pokeapi.co/api/v2/pokemon/?limit=50`;
    try {
      const result = await fetch(fetchApi);
      const data = await result.json();
      const pokemonResults = data.results;
      getPokemonDetails(pokemonResults);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPokemonDetails(pokemonResults) {
    const allPokemonData = [];

    for (const pokemon of pokemonResults) {
      try {
        const result = await fetch(pokemon.url);
        const data = await result.json();
        allPokemonData.push(data);
      } catch (err) {
        console.log(err);
      }
    }

    setPokemonData(allPokemonData);
    console.log("Pokemon", allPokemonData);
  }

  return (
    <>
    <h1>POKEDEX</h1>
      <h2>POKEMON DATA</h2>
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
