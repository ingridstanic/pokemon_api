import type { Pokemon } from "../models/Pokemon";
import { getRandomPokemonFromGen1 } from "../services/getRandomPokemon";

let attempts = 3;
let catchedPokemons = 0;

export const createPokemonToGuess = (pokemon: Pokemon) => {
  const pokemonContainer = document.getElementById("pokemonContainer");

  if (pokemonContainer) {
    pokemonContainer.innerHTML = "";
  }

  const module = document.createElement("div");
  const messageContainer = document.createElement("div");
  const pokeballContainer = document.createElement("ul");
  const imgContainer = document.createElement("div");
  const pokemonImg = document.createElement("img");
  const guessContainer = document.createElement("div");
  const guessForm = document.createElement("form");
  const guessInput = document.createElement("input");
  const guessBtn = document.createElement("button");

  let pokeballs = [];
  for (let i = 0; i <= attempts - 1; i++) {
    const pokeball = document.createElement("li");
    pokeball.innerHTML =
      '<img src="../src/assets/pokeball.png" alt="Pokéball" >';
    pokeballs.push(pokeball);
    pokeballContainer.appendChild(pokeball);
  }

  module.id = "moduleContainer";
  module.className = "module-container";
  messageContainer.id = "messageContainer";
  messageContainer.className = "message-container";
  pokeballContainer.id = "pokeballContainer";
  pokeballContainer.className = "pokeball-container";
  imgContainer.id = "imgContainer";
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
      catchedPokemons++;
      console.log("Total pokemons catched: ", catchedPokemons);

      nextPokemon(pokemon);
    } else {
      attempts--;
      pokeballs.pop();
      pokeballContainer.removeChild(pokeballContainer.lastChild as Node);
      tryAgain();

      if (attempts === 0) {
        gameOver();
      }
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

  module.appendChild(messageContainer);
  module.appendChild(imgContainer);
  module.appendChild(pokeballContainer);
  module.appendChild(guessContainer);

  pokemonContainer?.appendChild(module);
};

export const nextPokemon = (pokemon: Pokemon) => {
  const guessContainer = document.getElementById("guessContainer");
  const messageContainer = document.getElementById("messageContainer");

  if (guessContainer) {
    guessContainer.innerHTML = "";
  }

  if (messageContainer) {
    messageContainer.innerHTML = "";
  }

  const message = document.createElement("p");
  const next = document.createElement("button");

  message.innerHTML = `You catched ${pokemon.name}. Pokémons catched: ${catchedPokemons}`;
  next.innerHTML = "Next Pokémon!";

  next.className = "next-btn";
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    getRandomPokemonFromGen1();
  });

  messageContainer?.appendChild(message);
  guessContainer?.appendChild(next);
};

export const tryAgain = () => {
  const messageContainer = document.getElementById("messageContainer");

  if (messageContainer) {
    messageContainer.innerHTML = "";
  }

  const message = document.createElement("p");

  message.innerHTML = "Argh! Almost had it!";

  messageContainer?.appendChild(message);
};

export const gameOver = () => {
  const imgContainer = document.getElementById("imgContainer");
  const guessContainer = document.getElementById("guessContainer");
  const messageContainer = document.getElementById("messageContainer");

  if (imgContainer) {
    imgContainer.innerHTML = "";
  } else {
    return;
  }

  if (guessContainer) {
    guessContainer.innerHTML = "";
  }

  if (messageContainer) {
    messageContainer.innerHTML = "";
  }

  imgContainer.classList.add("game-over");

  const gameOverMessage = document.createElement("p");
  const playAgainBtn = document.createElement("button");

  gameOverMessage.innerHTML = "game over";
  playAgainBtn.id = "playAgainBtn";
  playAgainBtn.className = "play-again-btn";
  playAgainBtn.innerHTML = "play again";

  playAgainBtn.addEventListener("click", () => {
    getRandomPokemonFromGen1();
    attempts = 3;
  });

  imgContainer?.appendChild(gameOverMessage);
  guessContainer?.appendChild(playAgainBtn);
};
