import type { Pokemon } from "../models/Pokemon";
import { createPokemonToGuess } from "../Utils/htmlUtil";
import { randomNumberGen1 } from "../Utils/randomNumber";

export const getRandomPokemonFromGen1 = async () => {
  const magicNumber = randomNumberGen1();

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + magicNumber,
  );
  const data: Pokemon = await response.json();

  console.log(data);

  createPokemonToGuess(data);
};
