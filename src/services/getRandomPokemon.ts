import type { Pokemon } from "../models/Pokemon";
import { createPokemonToGuess } from "../Utils/createPokemonToGuess";
import { randomNumber } from "../Utils/randomNumber";

export const getRandomPokemon = async () => {
  const magicNumber = randomNumber();

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + magicNumber,
  );
  const data: Pokemon = await response.json();

  console.log(data);

  createPokemonToGuess(data);
};
