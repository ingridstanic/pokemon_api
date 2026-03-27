import "./scss/style.scss";
import { getRandomPokemonFromGen1 } from "./services/getRandomPokemon";
import { createHeader, createNavbar } from "./Utils/headerUtil";

createHeader();
createNavbar();
getRandomPokemonFromGen1();
