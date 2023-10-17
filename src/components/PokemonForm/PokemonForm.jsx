import React, { useState } from "react";

export default function SearchPokemon({ inputText, setInputText }) {
  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <>
      <header>Search for Pokemon </header>
      <form onSubmit={handleSubmit}>
        <input value={inputText} type="text" onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
