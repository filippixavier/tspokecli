import { stdin, stdout} from "node:process";
import { createInterface, Interface } from "readline";
import { CLICommand, getCommands } from "./CLICommands.js";
import { PokeAPI } from "../pokeapi.js"
import { PokemonData } from "src/pokemon_data.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>
    pokeapi: PokeAPI
    nextLocationsURL: string,
    prevLocationsURL : string,
    pokedex: Record<string, PokemonData>
}

export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    });
    
    const state = {
        rl,
        commands: getCommands(),
        pokeapi: new PokeAPI(),
        prevLocationsURL: "",
        nextLocationsURL: "",
        pokedex: {}
    }

    return state;
}