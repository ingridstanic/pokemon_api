import type { Pokemon } from "../models/Pokemon";
import { getRandomPokemon } from "../services/getRandomPokemon";

let attempts = 3;
let catchedPokemons = 0;

export const createPokemonToGuess = (pokemon: Pokemon) => {
  const pokemonContainer = document.getElementById("pokemonContainer");

  if (pokemonContainer) {
    pokemonContainer.innerHTML = "";
  }

  const imgContainer = document.createElement("div");
  const pokemonImg = document.createElement("img");
  const guessContainer = document.createElement("div");
  const guessForm = document.createElement("form");
  const guessInput = document.createElement("input");
  const guessBtn = document.createElement("button");

  imgContainer.className = "img-container";
  pokemonImg.className = "pokemon-img";
  guessContainer.className = "guess-container";
  guessContainer.id = "guessContainer";
  guessForm.id = "guessForm";
  guessForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const guessFromUser = (
      document.getElementById("guessInput") as HTMLInputElement
    ).value;

    if (guessFromUser.toLowerCase() === pokemon.name.toLowerCase()) {
      pokemonImg.classList.add("show");
      nextPokemon();
    } else {
      console.log("you dumb as f*ck");
      tryAgain();
    }
  });

  guessInput.placeholder = "GUESS THE POKÉMON...";
  guessInput.type = "text";
  guessInput.id = "guessInput";
  guessInput.autocomplete = "off";
  guessBtn.id = "guessBtn";
  guessBtn.innerHTML = "go!";

  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.alt = "Pokemon to guess";

  imgContainer.appendChild(pokemonImg);
  guessForm.appendChild(guessInput);
  guessForm.appendChild(guessBtn);

  guessContainer.appendChild(guessForm);

  pokemonContainer?.appendChild(imgContainer);
  pokemonContainer?.appendChild(guessContainer);
};

export const nextPokemon = () => {
  const guessContainer = document.getElementById("guessContainer");

  if (guessContainer) {
    guessContainer.innerHTML = "";
  }

  const message = document.createElement("p");
  const next = document.createElement("button");

  message.innerHTML = "Correct!";
  next.innerHTML = "Next Pokémon!";

  next.className = "next-btn";
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    getRandomPokemon();
  });

  guessContainer?.appendChild(message);
  guessContainer?.appendChild(next);
};

export const tryAgain = () => {
  const guessContainer = document.getElementById("guessContainer");

  const message = document.createElement("p");

  message.innerHTML = "Wrong guess! Try again!";

  guessContainer?.appendChild(message);
};
