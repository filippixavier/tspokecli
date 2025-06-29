import { State } from "./state.js";

export async function commandCatch(state: State, ...args: any) {
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    const pokemon = await state.pokeapi.fetchPokemon(pokemonName);

    if (pokemon.base_experience) {
        if (Math.random() * pokemon.base_experience > 40) {
            console.log(`${pokemonName} escaped!`);
        } else {
            console.log(`${pokemonName} was caught`);
            state.pokedex[pokemonName] = pokemon;
        }
    }
}