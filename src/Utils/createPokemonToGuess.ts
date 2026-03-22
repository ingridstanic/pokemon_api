import type { Pokemon } from "../models/Pokemon";

export const createPokemonToGuess = (pokemon: Pokemon) => {
  const pokemonContainer = document.getElementById("pokemonContainer");

  if (pokemonContainer) {
    pokemonContainer.innerHTML = "";
  }

  const imgContainer = document.createElement("div");
  const pokemonImg = document.createElement("img");
  const guessForm = document.createElement("form");
  const guessInput = document.createElement("input");
  const guessBtn = document.createElement("button");

  imgContainer.className = "imgContainer";
  pokemonImg.className = "pokemonImg";
  guessForm.id = "guessForm";
  guessInput.placeholder = "GUESS THE POKÉMON...";
  guessInput.type = "text";
  guessInput.id = "guessInput";
  guessBtn.id = "guessBtn";
  guessBtn.innerHTML = "GO!";

  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.alt = "Pokemon to guess";

  imgContainer.appendChild(pokemonImg);
  guessForm.appendChild(guessInput);
  guessForm.appendChild(guessBtn);

  pokemonContainer?.appendChild(imgContainer);
  pokemonContainer?.appendChild(guessForm);
};
