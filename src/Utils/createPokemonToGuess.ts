import type { Pokemon } from "../models/Pokemon";

export const createPokemonToGuess = (pokemon: Pokemon) => {
  const pokemonContainer = document.getElementById("pokemonContainer");

  if (pokemonContainer) {
    pokemonContainer.innerHTML = "";
  }

  const imgContainer = document.createElement("div");
  const pokemonImg = document.createElement("img");

  imgContainer.className = "imgContainer";
  pokemonImg.className = "pokemonImg";

  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.alt = "Pokemon to guess";

  imgContainer.appendChild(pokemonImg);

  pokemonContainer?.appendChild(imgContainer);
};
