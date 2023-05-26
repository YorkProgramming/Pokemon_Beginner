import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")

      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="container">
      <h1 className="title">The Ultimate Pokedex <h6>Alpha version*</h6></h1>

      <ul className="pokeName">

        {pokemonList.map((pokemon) => (

          <li key={pokemon.name}>
            {pokemon.name}{" "}

            <button className="btn" onClick={() => handlePokemonClick(pokemon)}
            >Who's That Pokemon!?</button>

            {selectedPokemon && selectedPokemon.name === pokemon.name && (

              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]}.png`}
                alt={pokemon.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;