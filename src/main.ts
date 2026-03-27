import "./scss/style.scss";
import { getRandomPokemonFromGen1 } from "./services/getRandomPokemon";
import { createHeader } from "./Utils/headerUtil";

createHeader();
getRandomPokemonFromGen1();
